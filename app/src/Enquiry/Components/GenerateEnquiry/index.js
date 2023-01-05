import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

import RadioButtonRN from 'radio-buttons-react-native';

const VinSelected = () => {
  return <Text>Vin is Selected</Text>;
};

const SkuSelected = () => {
  return <Text>SKU is Selected</Text>;
};

const GenerateEnquiryScreen = () => {
  const [isSelected, setIsSelected] = useState('Vin');

  const types = [
    {
      label: 'Vin',
    },
    {
      label: 'SKU',
    },
  ];
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View>
        <View style={Styles.mainContainer}>
          <View style={Styles.header}>
            <Text style={Styles.txtHeader}>Search Type</Text>
          </View>

          <RadioButtonRN
            data={types}
            initial={1}
            selectedBtn={value => setIsSelected(value.label)}
            box={false}
            style={Styles.radioButton}
            boxStyle={{flex: 1, alignItems: 'center'}}
            textStyle={{
              marginLeft: 5,
              fontFamily: Font.fontFamily.roboto,
              fontSize: Font.fontSize.ft14,
              color: DColor.black,
            }}
            activeColor={'#2196F3'}
          />
        </View>
        {isSelected == 'Vin' ? <VinSelected /> : <SkuSelected />}
      </View>
    </ImageBackground>
  );
};

export default GenerateEnquiryScreen;

const Styles = StyleSheet.create({
  text: {
    color: DColor.white,
  },

  mainContainer: {
    backgroundColor: 'white',
    margin: 20,
    // height: ActualHeight(140),
    // borderRadius: ActualHeight(6),
  },
  header: {
    backgroundColor: DColor.red,
    margin: 10,
    // borderRadius: ActualHeight(5),
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: ActualHeight(30),
  },
  txtHeader: {color: DColor.white, padding: 5, marginLeft: 10},
  radioButton: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    padding: 10,
  },
});
