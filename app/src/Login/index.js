import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userId, setuserId] = useState('');
  AsyncStorage.setItem('user', userId);

  const handleSendOTp = () => {
    if (userId) {
      navigation.navigate('Otp');
      //   if (userId == 'TEST') {
      //     alert('otp sent');
      //     navigation.navigate('Otp');
      //   } else {
      //     alert('user name does not exist');
      //   }
    } else {
      alert('please enter a user Id');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        value={userId}
        placeholder={'Enter User Id'}
        onChangeText={value => setuserId(value)}
        maxLength={10}
      />
      <Button title="SEND OTP" onPress={() => handleSendOTp()} />
    </View>
  );
};

export default LoginScreen;
