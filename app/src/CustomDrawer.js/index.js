import * as React from 'react';
import {Alert} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const handleLogOut = () => {
    AsyncStorage.setItem('user', '');
    props.navigation.navigate('Login');
  };

  const logOut = () => {
    Alert.alert('Hold on!', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => handleLogOut()},
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="LOG OUT" onPress={() => logOut()} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
