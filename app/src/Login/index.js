import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  Button,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

import NetInfo from '@react-native-community/netinfo';

import {showMessage} from 'react-native-flash-message';
import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import * as API from '../api/index';
import Loader from '../Loader';

import NoInternet from '../NoInternet';

import IMAGES from '../utils/images';

const sendOtp = async (userID, navigation) => {
  const data = {
    0: userID,
    1: '9.0',
  };
  const token = '';
  const link = 'MB_Authentication';
  const isMultiple = false; //true or false find
  const requestData = {
    header: {
      IN_PROCESS_ID: '1',
      OUT_PROCESS_ID: link,
      LOGIN_ID: '',
    },
    isMultiple: isMultiple,
    token: token,
    data: {
      [`${link}`]: {
        Row: [data],
      },
    },
  };
  return API.post(link, requestData, navigation);
};

const LoginScreen = ({navigation}) => {
  const [userId, setuserId] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  const handleSendOTP = () => {
    NetInfo.fetch().then(state => {
      console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        getOTP();
        {
          Keyboard.dismiss();
        }
      } else {
        showMessage({
          message: 'no internet',
          type: 'danger',
          position: 'bottom',
        });
      }
    });
  };

  const getOTP = () => {
    if (userId) {
      setIsLoader(true);
      sendOtp(userId, navigation)
        .then(responseData => {
          setIsLoader(false);
          if (responseData.success === '1') {
            const user_id = responseData.login_id;
            showMessage({
              message: 'OTP sent',
              type: 'success',
              autoHide: 'true',
              duration: 1000,
              position: 'bottom',
            });
            navigation.navigate('Otp', {user_id});
          } else {
            showMessage({
              message: responseData.msg,
              type: 'danger',
              autoHide: 'true',
              duration: 1000,
              position: 'bottom',
            });
          }
        })

        .catch(errData => {
          setIsLoader(false);
          console.log('Error while sending otp', errData.msg);
          showMessage({
            message: errData.msg,
            type: 'danger',
            autoHide: 'true',
            duration: 1000,
            position: 'bottom',
          });
        });
    } else {
      alert('please enter userId');
    }
  };
  return (
    <ImageBackground
      source={IMAGES.BACKGROUND_IMAGE}
      style={{
        flex: 1,
      }}>
      <View style={Styles.mainContainer}>
        <View>
          <Image source={IMAGES.LOGIN_SCREEN_LOGO} style={Styles.image} />
        </View>
        <View style={Styles.loginMainBox}>
          <View style={Styles.fieldContainer}>
            <Image source={IMAGES.MOBILE_ICON} style={Styles.phoneIcon} />
            <TextInput
              value={userId}
              placeholder={'Enter User Id'}
              onChangeText={value => setuserId(value)}
              style={Styles.textInput}
            />
          </View>
          {/* <Button title="SEND OTP" onPress={() => handleSendOTP()} /> */}

          <Pressable onPress={() => handleSendOTP()} style={Styles.btnLogin}>
            <Text
              style={{
                fontFamily: Font.fontFamily.regularCal,
                fontSize: Font.customFont.ft16,
              }}>
              SEND OTP
            </Text>
          </Pressable>
          {/* </View> */}
        </View>
      </View>
      {isLoader && <Loader />}
    </ImageBackground>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    // height: 250,
    height: ActualHeight(200),
    // backgroundColor: 'red',
    width: ActualWidth(250),
    resizeMode: 'contain',
  },
  loginMainBox: {
    height: ActualHeight(228.3612),
    // flex: 2,
    justifyContent: 'center',
    // backgroundColor: DColor.white,
    borderRadius: ActualWidth(16),
    padding: 15,
  },

  fieldContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: ActualWidth(310.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    borderColor: DColor.lightGray,
  },
  phoneIcon: {
    height: ActualHeight(22.0),
    width: ActualWidth(13.5),
    resizeMode: 'contain',
    marginRight: ActualWidth(14.9),
    alignSelf: 'center',
  },

  textInput: {
    fontFamily: Font.fontFamily.regularCal,
    fontSize: Font.customFont.ft16,
    color: DColor.black,
  },
  btnLogin: {
    backgroundColor: DColor.appColor,

    height: ActualHeight(34.0),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: ActualWidth(310.1),
    margin: 10,
  },
});
