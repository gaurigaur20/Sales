import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Button,
  StyleSheet,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';

import * as API from '../api/index';
import {verifyOtpAction} from '../redux/action';

const CELL_COUNT = 4;
const RESEND_OTP_TIME_LIMIT = 30;

const OtpScreen = ({navigation, route}) => {
  const {user_id} = route.params;
  const dispatch = useDispatch();

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

  AsyncStorage.setItem('otp', value);

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

    // resend OTP Api call
    // todo
    alert('Otp Sent');
  };
  const verifyOtp = async (user_id, navigation) => {
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

    return API.post(link, requestData, isMultiple, navigation);
  };

  const handleOnSubmit = () => {
    if (value) {
      if (value.length == 4) {
        verifyOtp(user_id, navigation)
          .then(responseData => {
            if (responseData.success === '1') {
              AsyncStorage.setItem('otp', value);
              dispatch(verifyOtpAction({user_id}));
              console.log('action dispatched when verify otp pressed');
              // setValue('');
              showMessage({
                message: 'you are logged in',
                type: 'success',
                autoHide: 'true',
                duration: 1000,
              });
              navigation.navigate('Dashboard');
            } else {
              showMessage({
                message: responseData.message,
                type: 'danger',
                autoHide: 'true',
                duration: 1000,
              });
            }
          })
          .catch(errData => {
            console.log('Error while verifying Otp', errData);
            showMessage({
              message: errData.message,
              type: 'danger',
              autoHide: 'true',
              duration: 1000,
            });
          });
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

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verify the Authorisation Code</Text>
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
          Resend Authorisation Code in {resendButtonDisabledTime} sec
        </Text>
      ) : (
        <Pressable onPress={onResendOtpButtonPress}>
          <View style={styles.resendCodeContainer}>
            <Text style={styles.resendCode}> Resend Code</Text>
          </View>
        </Pressable>
      )}
      <View style={styles.button}>
        <Button title="Submit" onPress={() => handleOnSubmit()} />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
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
    color: '#000',
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
    // color: Color.BLUE,
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeText: {
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OtpScreen;
// import {View, Text, TextInput, Button} from 'react-native';
// import React, {useState, useEffect} from 'react';

// import LoaderScreen from '../Loader';

// const OtpScreen = ({navigation}) => {
//   const [otp, setOtp] = useState('');
//   const [isLoader, setIsLoader] = useState(false);

// useEffect(() => {
//   setTimeout(() => {
//     navigation.navigate('Dashboard');
//   }, 5000);
// }, []);

//   const handleSubmitOTp = () => {
//     if (otp) {
//       // setIsLoader(true);
//       navigation.navigate('Dashboard');
//       // if (otp == '1234') {
//       //   alert('Welcome to Hero Sales App');
//       //   navigation.navigate('Dashboard');
//       // } else {
//       //   alert('Invalid otp');
//       // }
//     } else {
//       alert('please enter the received otp');
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <TextInput
//         value={otp}
//         placeholder={'Enter your Otp here'}
//         onChangeText={value => setOtp(value)}
//         maxLength={4}
//       />
//       <Button title="SUBMIT OTP" onPress={() => handleSubmitOTp()} />
//       {/* {isLoader && <LoaderScreen />} */}
//     </View>
//   );
// };

// export default OtpScreen;
