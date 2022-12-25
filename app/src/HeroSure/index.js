import {View, Text, Pressable, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';
const HeroSureScreen = ({navigation}) => {
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

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={Styles.root}>
      <View style={Styles.myIcon}>
        <MyIcon
          name="bicycle-outline"
          text="Hero 2 Wheeler"
          onPress={() => navigation.navigate('HeroTwoWheeler')}
        />
        <MyIcon
          name="call"
          text="Non-Hero 2 Wheeler"
          onPress={() => navigation.navigate('Non-HeroTwoWheeler')}
        />
      </View>
    </ImageBackground>
  );
};

export default HeroSureScreen;

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    marginLeft: '10%',
  },
  icon: {
    fontSize: 50,
    // backgroundColor: DColor,
    // height: 70,
    // width: 70,
    // borderRadius: 100 / 2,
    // width: ActualWidth(310.1),
    borderRadius: ActualHeight(16),
    borderWidth: 1,
    // borderColor: DColor.appColor,
    textAlign: 'center',
    marginTop: 20,
    height: ActualHeight(44.0),
  },
  text: {
    fontSize: 12,
    marginTop: '5%',
  },
  myIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
