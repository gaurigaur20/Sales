import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const PAS_KEY =
    'BSuXZhrGbmR7c6UyKyHajfmGcT3g2T22PAB3CEnQp8Dpc95XvHZW3t5CJVtsZFBCNaGkcwZBCaSSKG4NBwzKeXYbh755aMJCdGEGuAx44ctzUYuCgL8ctZskf';
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userId = await AsyncStorage.getItem('user');
      console.log('async data', userId);
      if (userId == null) {
        navigation.replace('Login');
      } else if (userId != null) {
        navigation.replace('Dashboard');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return <View style={{flex: 1, backgroundColor: 'transparent'}} />;
};

export default SplashScreen;
