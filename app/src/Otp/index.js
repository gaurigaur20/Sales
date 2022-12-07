import {View, Text, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

import LoaderScreen from '../Loader';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Dashboard');
  //   }, 5000);
  // }, []);

  const handleSubmitOTp = () => {
    if (otp) {
      // setIsLoader(true);
      navigation.navigate('Dashboard');
      // if (otp == '1234') {
      //   alert('Welcome to Hero Sales App');
      //   navigation.navigate('Dashboard');
      // } else {
      //   alert('Invalid otp');
      // }
    } else {
      alert('please enter the received otp');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        value={otp}
        placeholder={'Enter your Otp here'}
        onChangeText={value => setOtp(value)}
        maxLength={4}
      />
      <Button title="SUBMIT OTP" onPress={() => handleSubmitOTp()} />
      {/* {isLoader && <LoaderScreen />} */}
    </View>
  );
};

export default OtpScreen;
