import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      let data = await AsyncStorage.getItem('user');
      console.log('data', data);
      navigation.replace(data == null ? 'Login' : 'Dashboard');
    } catch (error) {
      console.log('error', error);
    }
  };
  return <View style={{flex: 1, backgroundColor: 'transparent'}} />;
};

export default SplashScreen;

// AsyncStorage.getItem('user').then(value =>
//   navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
// );
