import {put, takeLatest} from 'redux-saga/effects';
import {VERIFY_OTP, USER_DATA} from './actionTypes';
import SharedManager from '../utils/SharedManager';
import {showMessage} from 'react-native-flash-message';
import crypto from 'react-native-crypto-js';
import base64 from 'react-native-base64';
import * as API from '../api';

import {getLoaderAction} from './action';

import AsyncStorage from '@react-native-async-storage/async-storage';
const PAS_KEY =
  'BSuXZhrGbmR7c6UyKyHajfmGcT3g2T22PAB3CEnQp8Dpc95XvHZW3t5CJVtsZFBCNaGkcwZBCaSSKG4NBwzKeXYbh755aMJCdGEGuAx44ctzUYuCgL8ctZskf';

function* verifyOtpSaga(_data) {
  try {
    const realData = _data.payload;

    console.log('real Data ', realData);
    const dispatch = realData.dispatch;
    dispatch(getLoaderAction({loader: true}));
    if (__DEV__) {
      console.log('Payload Data ===>', realData);
    }
    let res = {};

    if (realData.isLogin) {
      res = realData.data;
      console.log('res', res);
    } else {
      res = yield API.post(
        'MB_GET_AUTHORISED',
        realData.requestData,
        realData.navigation,
      );
    }

    if (__DEV__) {
      console.log('response in saga ===> ', res);
    }
    if (res.success === '1') {
      if (!realData.isLogin) {
        showMessage({
          message: 'you are logged in',
          type: 'success',
          autoHide: 'true',
          duration: 1000,
          position: 'bottom',
        });
      }

      let tokentemp = res.token + '::' + res.login_id + '::B2B';
      tokentemp = 'Basic ' + base64.encode(tokentemp);

      SharedManager.getInstance().setToken(tokentemp);
      SharedManager.getInstance().setUser(res);
      let encData = crypto.AES.encrypt(
        JSON.stringify({res}),
        PAS_KEY,
      ).toString();
      console.log('encData', encData);
      console.log('encData', encData);
      yield AsyncStorage.setItem('user', encData);

      // yield AsyncStorage.setItem('user', res.login_id);
      yield put({type: USER_DATA, res});

      realData.navigation.navigate('Dashboard');

      dispatch(getLoaderAction({loader: false}));
    } else {
      dispatch(getLoaderAction({loader: false}));
      showMessage({
        message: responseData.message,
        type: 'danger',
        autoHide: 'true',
        duration: 1000,
        position: 'bottom',
      });
    }
  } catch (error) {
    const dispatch = _data.payload.dispatch;
    dispatch(getLoaderAction({loader: false}));
    console.log('error', error);
    showMessage({
      message: `${error.message}`,
      type: 'danger',
      autoHide: 'true',
      duration: 1000,
      position: 'bottom',
    });
  }
}

export function* loginSaga() {
  yield takeLatest(VERIFY_OTP, verifyOtpSaga);
}
