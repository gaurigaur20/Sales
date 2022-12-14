import {View, Text, TextInput, Pressable, Button} from 'react-native';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

import * as API from '../api/index';

const sendOtp = async (userID, navigation) => {
  const data = {
    0: userID,
    1: '9.0',
  };
  const token = '';
  const link = 'MB_Authentication';
  const isMultiple = false; //true or false find
  const requestData = {
    header: {
      IN_PROCESS_ID: '1',
      OUT_PROCESS_ID: link,
      LOGIN_ID: '',
    },
    isMultiple: isMultiple,
    token: token,
    data: {
      [`${link}`]: {
        Row: [data],
      },
    },
  };

  return API.post(link, requestData, isMultiple, navigation);
};

const LoginScreen = ({navigation}) => {
  const [userId, setuserId] = useState('');

  const handleSendOTP = () => {
    if (userId) {
      sendOtp(userId, navigation)
        .then(responseData => {
          if (responseData.success === '1') {
            const user_id = responseData.login_id;
            AsyncStorage.setItem('user', user_id);
            setuserId(' ');
            showMessage({
              message: 'OTP sent',
              type: 'success',
              autoHide: 'true',
              duration: 1000,
            });
            navigation.navigate('Otp', {user_id});
          } else {
            showMessage({
              message: responseData.msg,
              type: 'danger',
              autoHide: 'true',
              duration: 1000,
            });
          }
        })
        .catch(errData => {
          console.log('Error while sending otp', errData);
          showMessage({
            message: errData.msg,
            type: 'danger',
            autoHide: 'true',
            duration: 1000,
          });
        });
    } else {
      alert('please enter userId');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        value={userId}
        placeholder={'Enter User Id'}
        onChangeText={value => setuserId(value)}
        maxLength={10}
      />
      <Button title="SEND OTP" onPress={() => handleSendOTP()} />
    </View>
  );
};

export default LoginScreen;
