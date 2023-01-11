import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useDispatch, useSelector} from 'react-redux';

import {verifyOtpAction} from '../redux/action';
import Loader from '../Loader';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';

const CELL_COUNT = 4;
const RESEND_OTP_TIME_LIMIT = 30;

const OtpScreen = ({navigation, route}) => {
  const {user_id} = route.params;
  const [isLoader, setIsLoader] = useState(false);
  const dispatch = useDispatch();

  const getLoaderRes = useSelector(state => state.rootReducer.forLoader);

  let resendOtpTimerInterval = 0;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();
    alert('Otp Sent');
  };
  const verifyOtp = async user_id => {
    const data = {
      0: user_id,
      1: value,
    };
    const token = '';
    const link = 'MB_GET_AUTHORISED';
    const isMultiple = false; //true or false find
    const inProcessId = '26';
    const requestData = {
      header: {
        IN_PROCESS_ID: inProcessId,
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
    dispatch(
      verifyOtpAction({requestData, navigation, isLogin: false, dispatch}),
    );

    // return API.post(link, requestData, navigation);
  };

  const handleOnSubmit = () => {
    if (value) {
      if (value.length == 4) {
        setIsLoader(true);
        verifyOtp(user_id);
        setValue('');
      } else {
        alert('error');
      }
    } else {
      alert('please enter the received otp');
    }
  };

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  });
  useEffect(() => {
    if (getLoaderRes) {
      setIsLoader(getLoaderRes.loader);
    }
  }, [getLoaderRes]);

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={styles.root}>
      <View style={styles.otpMainBox}>
        <Text style={styles.title}>Please enter OTP</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        {/* View for resend otp  */}
        {resendButtonDisabledTime > 0 ? (
          <Text style={styles.resendCodeText}>
            Resend OTP in {resendButtonDisabledTime} sec
          </Text>
        ) : (
          <Pressable onPress={onResendOtpButtonPress}>
            <View style={styles.resendCodeContainer}>
              <Text style={styles.resendCode}> Resend OTP</Text>
            </View>
          </Pressable>
        )}
        <View style={{marginLeft: 20, marginRight: 10}}>
          <Pressable onPress={() => handleOnSubmit()} style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>SUBMIT OTP</Text>
          </Pressable>
        </View>

        {/* <View style={{margin: 20}}>
          <Button
            onPress={() => handleOnSubmit()}
            title="Submit OTP"
            color={DColor.appColor}
          />
        </View> */}
      </View>
      {isLoader && <Loader />}
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  otpMainBox: {
    height: ActualHeight(273.3612),
    backgroundColor: DColor.white,
    borderRadius: ActualWidth(16),
    padding: 15,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    color: DColor.gray,
    marginStart: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
  },
  codeFieldRoot: {
    marginTop: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: DColor.gray,
    fontSize: 28,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },

  button: {
    marginTop: 20,
  },
  resendCode: {
    color: DColor.gray,
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeText: {
    marginStart: 20,
    marginTop: 40,
    color: DColor.gray,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: DColor.appColor,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnLogin: {
    padding: 10,
    color: DColor.white,
    textAlign: 'center',
    fontFamily: Font.fontFamily.regularCal,
    fontSize: Font.customFont.ft16,
  },
});

export default OtpScreen;
