import _ from 'lodash';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedManager from '../utils/SharedManager';

const domainUrl =
  'https://hmclmobazfun02p-staging.azurewebsites.net/api/cloudware_prod?ORG_ID=HSAPT';

export const IS_AUTH_ERROR = 'IS_AUTH_ERROR';
export const API_ERROR = 'API_ERROR';
export const SUCCESS = 'success';

//========================Create Body Params ==============================//
// @ts-ignore
const makeBody = (header, data) => ({
  PWSESSIONRS: {
    PWPROCESSRS: {
      PWDATA: data,
      PWERROR: {},
      PWHEADER: {
        IN_PROCESS_ID: header.IN_PROCESS_ID,
        APP_ID: 'HSA',
        ORG_ID: 'HSA',
        OUT_PROCESS_ID: header.OUT_PROCESS_ID,
        LOGIN_ID: header.LOGIN_ID,
      },
    },
  },
});

const handleResponse = (responseJson, link, resolve, reject, isMultiple) => {
  const session = responseJson.PWSESSIONRS[0];
  const response = session.PWPROCESSRS;
  const dataBlob = response.PWDATA;
  const error = response.PWERROR;
  const MBResponse = dataBlob[link];
  if (!_.isEmpty(error)) {
    reject(error);
    return;
  }
  const dataRow = isMultiple ? MBResponse.Row : MBResponse.Row[0];
  if (dataRow?.response != undefined) {
    resolve(dataRow.response);
  } else if (MBResponse.Row.length > 0) {
    const data = isMultiple ? dataRow[0] : dataRow;
    if (data[SUCCESS] === '0') {
      // showMessage({message: data.message, type: 'danger'});
      reject({...data, [API_ERROR]: error});
      return;
    }
    resolve(dataRow);
  } else {
    resolve(dataRow);
    // reject({ ...dataRow, error });
  }
};

export const post = async (link, data, isMultiple, navigation) =>
  new Promise(async (resolve, reject) => {
    const url = domainUrl;
    let headers = {
      Authorization: `Bearer ${SharedManager.getInstance().getToken()}`,
      'Content-type': 'application/json',
    };
    const requestBody = makeBody(data.header, data.data);
    if (__DEV__) {
      console.log('RequestData', JSON.stringify(requestBody));
    }

    await fetch(url, {
      body: JSON.stringify(requestBody),
      method: 'POST',
      headers: headers,
    })
      .then(async response => {
        if (response.status === 401) {
          await AsyncStorage.clear();
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        } else {
          return response.json();
        }
      })
      .then(responseJson => {
        console.log('response Data', JSON.stringify(responseJson));
        handleResponse(responseJson, link, resolve, reject, isMultiple);
      })
      .catch(error => {
        if (__DEV__) {
          console.log(`Error while sending POST request, link ${link}`, error);
        }
        reject(error);
      });
  });
