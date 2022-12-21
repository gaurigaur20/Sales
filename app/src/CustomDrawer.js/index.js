import * as React from 'react';
import {Alert, Image, View, Text} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedManager from '../utils/SharedManager';

const CustomDrawer = props => {
  const url =
    'https://hmclmobdiag.blob.core.windows.net/uploads/tso/profile_sample.jpg';
  const user = SharedManager.getInstance().getUser().login_id;

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('user');
    props.navigation.closeDrawer();
    props.navigation.navigate('Login');
  };

  const logOut = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => handleLogOut()},
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: url}}
          style={{
            resizeMode: 'center',
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
          }}
        />
        <Text>{user}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="LOG OUT" onPress={() => logOut()} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
