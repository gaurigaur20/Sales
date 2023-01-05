import {
  View,
  Text,
  Button,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';

const MyIcon = ({name, onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={Styles.pressable}>
      <Icon
        name={name}
        onPress={onPress}
        style={{
          borderRadius: ActualHeight(50),
          borderWidth: 3,
          padding: 10,
          // alignItems: 'center',
          alignSelf: 'center',
          borderColor: DColor.white,
          // backgroundColor: 'red',
        }}
        color={DColor.white}
        size={40}></Icon>
      <Text style={Styles.text}>{text}</Text>
    </Pressable>
  );
};

const EnquiryScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
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

  const handleOnSubmit = () => {
    if (mobileNumber) {
      navigation.navigate('Contact', {mobileNumber});
    } else {
      alert('please enter a mobile number');
    }
  };

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          margin: 30,
          color: DColor.white,
          fontSize: 16,
        }}>
        To see enquiries you need to search for mobile or registration number.
      </Text>
      <View style={Styles.myIcon}>
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('Recent Orders')}
          text="Recent Orders"
        />
        <MyIcon
          name="call"
          text="Today's Followup"
          onPress={() => downloadApp()}
        />
        <MyIcon
          name="call"
          text="Pending Followup"
          onPress={() => downloadApp()}
        />
      </View>
      <View style={Styles.myIcon}>
        <MyIcon
          name="folder-open-outline"
          text="Search Enquiry"
          onPress={() => downloadApp()}
        />
        <MyIcon
          name="home-outline"
          text="Exchange Details"
          onPress={() => navigation.navigate('Exchange Details')}
        />
        <MyIcon
          name="location-outline"
          text="Failed Enquiry"
          onPress={() => navigation.navigate('Failed Enquiry')}
        />
      </View>
      <View style={Styles.myIcon}>
        <MyIcon
          name="bicycle-outline"
          text="Customer Interaction"
          onPress={() => navigation.navigate('Customer Interaction')}
        />
      </View>
      <View style={Styles.fieldContainer}>
        <TextInput
          value={mobileNumber}
          placeholder={'Mobile/Registration Number'}
          onChangeText={value => setMobileNumber(value)}
          style={Styles.textInput}
          keyboardType="number-pad"
          maxLength={10}
        />
        {/* <Pressable onPress={() => alert('coming soon!')}>
        <Text>NEXT</Text>
      </Pressable> */}
        <View
          style={{
            width: ActualWidth(210.1),
            margin: 5,
            // justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Button
            title="NEXT"
            onPress={() => handleOnSubmit()}
            color={DColor.appColor}
            mobileNumber={mobileNumber}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EnquiryScreen;

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pressable: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginRight: '10%',
    // marginLeft: '10%',
    // backgroundColor: 'yellow',
    margin: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  icon: {
    // borderColor: DColor.white,
    padding: 5,
    backgroundColor: DColor.red,
    // height: 70,
    // width: 70,
    // borderRadius: 100 / 2,
    // width: ActualWidth(310.1),
    borderRadius: ActualHeight(50),
    // borderWidth: 2,
    // borderColor: DColor.appColor,
    textAlign: 'center',
    marginTop: 20,
    height: ActualHeight(44.0),
  },
  text: {
    fontSize: 12,
    marginTop: '5%',
    color: DColor.white,
  },
  myIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fieldContainer: {
    // height: ActualHeight(228.3612),
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
