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
        style={Styles.icon}
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
          // fontSize: 16,
          fontWeight: 'bold',
        }}>
        To see enquiries you need to search for mobile or registration number.
      </Text>
      <View style={Styles.mainContainer}>
        <View style={Styles.IconContainer}>
          <View style={Styles.iconRow1}>
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
          <View style={Styles.iconRow2}>
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
          <View style={Styles.iconRow3}>
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
            <View>
              <Pressable
                onPress={() => handleOnSubmit()}
                style={{
                  backgroundColor: DColor.appColor,
                  borderRadius: 5,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: ActualWidth(310.1),
                }}>
                <Text
                  style={{
                    padding: 10,
                    color: DColor.white,
                    textAlign: 'center',
                    fontFamily: Font.fontFamily.regularCal,
                    fontSize: Font.customFont.ft16,
                  }}>
                  NEXT
                </Text>
              </Pressable>
            </View>

            {/* <View
              style={{
                width: ActualWidth(150),
                margin: 10,
                // // justifyContent: 'center',
                // alignSelf: 'center',
              }}>
              <Button
                title="NEXT"
                onPress={() => handleOnSubmit()}
                color={DColor.appColor}
                mobileNumber={mobileNumber}
              />
            </View> */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EnquiryScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 4,
  },
  IconContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  iconRow1: {
    flexDirection: 'row',
  },
  iconRow2: {
    flexDirection: 'row',
  },
  iconRow3: {
    // flex: 0.3,
    // alignItems: 'flex-start',
    flexDirection: 'row',
  },
  pressable: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderRadius: ActualHeight(50),
    // borderWidth: 2,
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
    // backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    borderRadius: ActualWidth(16),
    padding: 15,
  },
  textInput: {
    width: ActualWidth(310.1),
    height: ActualHeight(38.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    // borderWidth: 1,
    borderColor: DColor.lightGray,
  },
  pressableButton: {},
});
