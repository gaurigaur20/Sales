import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';

import Icon from 'react-native-vector-icons/Ionicons';

const MyIcon = ({name, onPress, text}) => {
  return (
    <>
      <Pressable onPress={onPress} style={Styles.pressable}>
        <Icon name={name} onPress={onPress} style={Styles.icon}></Icon>
        <Text style={Styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const DashboardScreen = ({navigation}) => {
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
  const getSarthiApp = () => {
    Alert.alert('Unauthorized', 'You are not authorized to use this module', [
      {
        text: 'OK',
        onPress: () => null,
      },
    ]);
  };
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.root}>
        {/* <View>
        <Image
          source={IMAGES.LOGIN_SCREEN_LOGO}
          style={{
            height: 150,
            width: 400,
            resizeMode: 'contain',
          }}
        />
      </View> */}
        <View style={Styles.myIcon}>
          <MyIcon
            name="bicycle-outline"
            onPress={() => downloadApp()}
            text="Products"
          />
          <MyIcon
            name="call"
            onPress={() => navigation.navigate('Enquiry')}
            text="Enquiry"
          />
          <MyIcon
            name="people-outline"
            onPress={() => navigation.navigate('Prospect')}
            text="Prospect"
          />
        </View>
        <View style={Styles.myIcon}>
          <MyIcon
            name="folder-open-outline"
            onPress={() => downloadApp()}
            text="Circular"
          />
          <MyIcon
            name="home-outline"
            onPress={() => navigation.navigate('AvailableStock')}
            text="Available Stock"
          />
          <MyIcon
            name="location-outline"
            onPress={() => getSarthiApp()}
            text="Sarthi"
          />
        </View>
        <View style={Styles.myIcon}>
          <MyIcon
            name="bicycle-outline"
            onPress={() => navigation.navigate('HeroSure')}
            text="Hero Sure"
          />
          <MyIcon
            name="bicycle-outline"
            onPress={() => downloadApp()}
            text="myClick"
          />
        </View>
      </View>
      <View style={Styles.footer}>
        <Text>
          All rights reserved by Hero Moto Corp
          {'\n'}
          <Text style={{alignItems: 'center'}}>
            Toll Free No: 1800-266-0018
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;

const Styles = StyleSheet.create({
  root: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    marginLeft: '10%',
  },
  icon: {
    fontSize: 50,
    // backgroundColor: 'red',
    // height: 70,
    // width: 70,
    // borderRadius: 100 / 2,
    // width: ActualWidth(310.1),
    borderRadius: ActualHeight(16),
    borderWidth: 1,
    // borderColor: DColor.lightGray,
    textAlign: 'center',
    marginTop: 20,
    height: ActualHeight(44.0),
  },
  text: {
    fontSize: 15,
    marginTop: '5%',
  },
  myIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    backgroundColor: DColor.gray,
    alignItems: 'center',
    // textAlign: 'center',
    marginTop: ActualHeight(323),
    // marginBottom: 50,
  },
});
