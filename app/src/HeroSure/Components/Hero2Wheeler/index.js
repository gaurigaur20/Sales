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
    <ImageBackground
      source={IMAGES.BACKGROUND_IMAGE}
      style={{flex: 1, alignItems: 'center'}}>
      <View style={{margin: 50}}>
        <Text style={{textAlign: 'center'}}>Customer VIN Number</Text>
        <TextInput
          placeholder="VIN number"
          onChangeText={value => setVinNumber(value)}
          value={vinNumber}
          style={Styles.textInput}
        />
        {/* <Pressable onPress={() => alert('coming soon')}>
        <Text>PROCEED</Text>
      </Pressable> */}
        <View
          style={{
            width: ActualWidth(210.1),

            // justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Button
            color={DColor.appColor}
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
  textInput: {
    margin: 10,
    width: ActualWidth(310.1),
    height: ActualHeight(44.0),
    backgroundColor: DColor.lightGray,
    borderRadius: ActualHeight(5),
    paddingLeft: ActualWidth(10.8),
    // borderWidth: 1,
    borderColor: DColor.lightGray,
  },
});
