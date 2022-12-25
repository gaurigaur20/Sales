import * as React from 'react';
import {Alert, Image, View, Text} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileComponent from '../Profile';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

const CustomDrawer = props => {
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

  const downloadApp = () => {
    Alert.alert('App not Installed', 'Install additional library', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'CANCEL',
      },
      {
        text: 'DOwNLOAD',
        onPress: () => console.log('url to download the application'),
      },
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <ProfileComponent />
      <DrawerContentScrollView {...props}>
        <View style={{margin: 5, padding: 5}}>
          <DrawerItemList {...props} />
        </View>
        <View style={{margin: 5, marginTop: -5, padding: 5, paddingTop: -5}}>
          <DrawerItem
            label="WOT Certification"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.customFont.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            style={{
              // backgroundColor: 'red',
              borderBottomColor: 'grey',
              // borderBottomWidth: 1,
              // borderWidth: 1,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="MMI"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="We Connect"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="Product"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="MYCLICK"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="PRODUCT CONFIGURATOR"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="VALUE ADDED SERVICES"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="CALCULATE EMI"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="CIRCULARS"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="CONTACT US"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="SHARE FEEDBACK"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => downloadApp()}
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
          <DrawerItem
            label="LOG OUT"
            labelStyle={{
              marginLeft: -25,
              fontSize: Font.fontSize.ft12,
              color: 'black',
              fontFamily: Font.fontFamily.regularCal,
            }}
            onPress={() => logOut()}
            drawer
            icon={(focused, size) => (
              <Icon name="home" size={22} color="black" />
            )}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
