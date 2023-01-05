import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';

const ProspectScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const MyIcon = ({name, onPress, text}) => {
    return (
      <>
        <Pressable onPress={onPress} style={Styles.pressable}>
          <Icon
            name={name}
            onPress={onPress}
            style={Styles.icon}
            size={40}></Icon>
          <Text style={Styles.text}>{text}</Text>
        </Pressable>
      </>
    );
  };
  return (
    <>
      <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
        <View style={Styles.mainContainer}>
          <View style={Styles.IconContainer}>
            <View style={Styles.iconRow1}>
              <MyIcon
                name="bicycle-outline"
                text="Today's Followup"
                onPress={() => navigation.navigate('Todays FollowupProspect')}
              />
              <MyIcon
                name="call"
                text="Pending Followup"
                onPress={() => navigation.navigate('Pending FollowupProspect')}
              />
              <MyIcon
                name="call"
                text="New Prospect"
                onPress={() => navigation.navigate('New Prospect')}
              />
            </View>
          </View>

          <View style={Styles.fieldContainer}>
            <TextInput
              value={mobileNumber}
              placeholder={'Mobile/Phone'}
              onChangeText={value => setMobileNumber(value)}
              maxLength={10}
              keyboardType="number-pad"
              style={Styles.textInput}
            />
            <View
              style={{
                width: ActualWidth(150.1),
                margin: 5,
              }}>
              <Button
                title="SEARCH PROSPECT"
                color={DColor.appColor}
                onPress={() => navigation.navigate('Prospect List')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProspectScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
  },
  IconContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 20,
  },
  iconRow1: {
    flexDirection: 'row',
  },

  pressable: {
    margin: 5,
    alignItems: 'center',
  },
  icon: {
    borderRadius: ActualHeight(50),
    // borderWidth: 2,
    color: DColor.white,
    padding: 10,
    textAlign: 'center',
    backgroundColor: DColor.red,
  },
  text: {
    color: DColor.white,
    textAlign: 'center',
  },
  myIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fieldContainer: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: ActualWidth(16),
    padding: 15,
  },
  textInput: {
    width: ActualWidth(310.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    // borderWidth: 1,
    borderColor: DColor.lightGray,
  },
});
