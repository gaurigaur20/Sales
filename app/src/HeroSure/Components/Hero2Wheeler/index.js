import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {showMessage} from 'react-native-flash-message';
import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const HeroTwoWheelerScreen = () => {
  const [vinNumber, setVinNumber] = useState('');
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        {/* style={{margin: 50}} */}
        <Text style={Styles.text}>
          Customer <Text>VIN Number</Text>
        </Text>
        {/* style={{textAlign: 'center'}} */}
        <View style={Styles.textInputContainer}>
          <TextInput
            placeholder="VIN number"
            onChangeText={value => setVinNumber(value)}
            value={vinNumber}
            style={Styles.textInput}
          />
        </View>

        <View
          style={{
            margin: 10,
          }}>
          <Button
            color={DColor.red}
            title="PROCEED"
            onPress={() => alert('proceeded')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HeroTwoWheelerScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 60,
    // justifyContent: 'center',
  },
  textInputContainer: {
    width: ActualWidth(250.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.white,
    borderRadius: ActualHeight(16),
  },
  textInput: {
    margin: 4,
  },
  text: {
    color: DColor.white,
    fontWeight: 'bold',
    margin: 20,
  },
});
