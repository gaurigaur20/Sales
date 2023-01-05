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
          <Icon name={name} onPress={onPress} style={Styles.icon}></Icon>
          <Text style={Styles.text}>{text}</Text>
        </Pressable>
      </>
    );
  };
  return (
    <>
      <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={Styles.root}>
        <View style={Styles.myIcon}>
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
        <View style={Styles.fieldContainer}>
          <TextInput
            value={mobileNumber}
            placeholder={'Mobile/Phone'}
            onChangeText={value => setMobileNumber(value)}
            maxLength={10}
            keyboardType="number-pad"
            style={Styles.textInput}
          />
          {/* <Pressable onPress={() => alert('coming soon!')}>
            <Text>SEARCH PROSPECT</Text>
          </Pressable> */}
          <View
            style={{
              width: ActualWidth(210.1),
              margin: 5,
              // justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Button
              title="SEARCH PROSPECT"
              color={DColor.appColor}
              onPress={() => navigation.navigate('Prospect List')}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProspectScreen;

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
  fieldContainer: {
    height: ActualHeight(338.3612),
    // backgroundColor: DColor.white,
    borderRadius: ActualWidth(16),
    // marginLeft: 15,
    // marginRight: 15,
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    // width: ActualWidth(310.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    // borderWidth: 1,
    borderColor: DColor.lightGray,
  },
});
