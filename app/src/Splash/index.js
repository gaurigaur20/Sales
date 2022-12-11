import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userId = await AsyncStorage.getItem('user');
      const key = await AsyncStorage.getItem('otp');
      const data = {
        userid: userId,
        key: key,
      };
      console.log('async data', data);
      if (data.userid == null && data.key == null) {
        navigation.replace('Login');
      } else if (data.userid != null && data.key != null) {
        navigation.replace('Dashboard');
      }
      else{
        navigation.replace('Login')
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return <View style={{flex: 1, backgroundColor: 'transparent'}} />;
};

export default SplashScreen;
