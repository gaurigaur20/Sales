import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import crypto from 'react-native-crypto-js';

import {verifyOtpAction} from '../redux/action';
import {useDispatch} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const PAS_KEY =
    'BSuXZhrGbmR7c6UyKyHajfmGcT3g2T22PAB3CEnQp8Dpc95XvHZW3t5CJVtsZFBCNaGkcwZBCaSSKG4NBwzKeXYbh755aMJCdGEGuAx44ctzUYuCgL8ctZskf';
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      let data = await AsyncStorage.getItem('user'); //gets user information from the async storage(for further info look into loginsaga.js)

      let decData = crypto.AES.decrypt(data, PAS_KEY).toString(crypto.enc.Utf8); // what's going on here?

      const dataBlob = JSON.parse(decData);

      if (dataBlob) {
        // props.navigation.navigate('Drawer')

        let data = dataBlob.res;
        dispatch(
          verifyOtpAction({
            data,
            navigation,
            isLogin: true,
            dispatch,
          }),
        );
      }
    } catch (error) {
      // console.log("error",error);
      navigation.navigate('Login');
    }
  };

  return <View style={{flex: 1, backgroundColor: 'transparent'}} />;
};

export default SplashScreen;
