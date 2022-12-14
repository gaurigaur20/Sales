import * as React from 'react';
import {Alert, Image, View, Text} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const CustomDrawer = props => {
  const url =
    'https://hmclmobdiag.blob.core.windows.net/uploads/tso/profile_sample.jpg';

  const userData = useSelector((state, shallowEqual) =>
    JSON.stringify(state.rootReducer.userLoginData),
  );

  const userId = JSON.parse(userData).user_id;
  console.log('user Id', userId);

  const handleLogOut = () => {
    AsyncStorage.setItem('user', '');
    props.navigation.closeDrawer();
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
        <Text>{userId}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="LOG OUT" onPress={() => logOut()} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
