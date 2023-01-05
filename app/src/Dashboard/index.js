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
    <Pressable onPress={onPress} style={Styles.pressable}>
      <Icon
        name={name}
        onPress={onPress}
        style={Styles.icon}
        color={DColor.white}
        size={40}></Icon>
      <Text style={Styles.text}>{text}</Text>
    </Pressable>
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
      <View style={Styles.mainContainer}>
        <View style={Styles.IconContainer}>
          <View style={Styles.iconRow1}>
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
          <View style={Styles.iconRow2}>
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
          <View style={Styles.iconRow3}>
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
          <Text style={{textAlign: 'center', color: DColor.white}}>
            All rights reserved by Hero Moto Corp
            {'\n'}
            Toll Free No: 1800-266-0018
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 4,
  },
  IconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconRow1: {
    flexDirection: 'row',
  },
  iconRow2: {
    flexDirection: 'row',
  },
  iconRow3: {
    flexDirection: 'row',
  },
  pressable: {margin: 20},
  icon: {
    borderRadius: ActualHeight(50),
    borderWidth: 3,
    padding: 10,
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: DColor.white,
  },
  text: {color: DColor.white, alignSelf: 'center', flexWrap: 'wrap'},
  footer: {
    backgroundColor: DColor.gray,
    justifyContent: 'center',
    height: ActualHeight(50),
  },
});
