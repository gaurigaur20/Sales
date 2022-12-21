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
} from 'react-native';
import React, {useState} from 'react';

import {showMessage} from 'react-native-flash-message';
import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import * as API from '../api/index';
import Loader from '../Loader';

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
          console.log('Error while sending otp', errData);
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
      style={{
        flex: 1,
      }}
      source={IMAGES.BACKGROUND_IMAGE}>
      <View>
        <Image
          source={IMAGES.LOGIN_SCREEN_LOGO}
          style={{
            height: 250,
            width: 400,
            resizeMode: 'contain',
          }}
        />
      </View>
      <ScrollView>
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
            <Text style={Styles.textBtnLogin}>SEND OTP</Text>
          </Pressable>
        </View>
      </ScrollView>
      {isLoader && <Loader />}
    </ImageBackground>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  loginMainBox: {
    height: ActualHeight(228.3612),
    backgroundColor: DColor.white,
    borderRadius: ActualWidth(16),
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },

  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ActualWidth(310.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    // borderWidth: 1,
    borderColor: DColor.lightGray,
  },
  phoneIcon: {
    height: ActualHeight(22.0),
    width: ActualWidth(13.5),
    resizeMode: 'contain',
    marginRight: ActualWidth(14.9),
  },

  textInput: {
    fontFamily: Font.fontFamily.regularCal,
    fontSize: Font.customFont.ft16,
    color: DColor.black,
    flex: 1,
  },
  btnLogin: {
    backgroundColor: DColor.appColor,
    width: ActualWidth(310.1),
    borderRadius: ActualHeight(5),
    borderWidth: 1,
    borderColor: DColor.lightGray,
    textAlign: 'center',
    marginTop: 20,
    height: ActualHeight(44.0),
  },
  textBtnLogin: {
    padding: 10,
    color: DColor.white,
    fontSize: Font.customFont.ft18,
    textAlign: 'center',
    fontFamily: Font.fontFamily.regular,
  },
});
