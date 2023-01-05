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
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
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
  mainContainer: {
    flex: 1,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pressable: {
    alignItems: 'center',
    margin: 30,
  },
  icon: {
    fontSize: 40,
    backgroundColor: DColor.red,
    borderRadius: ActualHeight(50),

    color: DColor.white,
    textAlign: 'center',
    padding: 10,
  },
  text: {
    // fontSize: 12,
    color: DColor.white,
  },
});
