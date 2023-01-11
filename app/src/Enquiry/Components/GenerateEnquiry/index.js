import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

import RadioButtonRN from 'radio-buttons-react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const data = [
  {key: 'Canada', value: 'Canada'},
  {key: 'England', value: 'England'},
  {key: 'Pakistan', value: 'Pakistan'},
  {key: 'India', value: 'India'},
  {key: 'NewZealand', value: 'NewZealand'},
];

const VinSelected = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={{}}>
      <SelectList
        setSelected={setSelected}
        data={data}
        // labelStyle={{color: 'white', textAlign: 'center'}}
        inputStyles={{color: 'white'}}
        placeholder="search"
        boxStyles={{
          border: 0,
          margin: 20,
          borderRadius: 0,
          borderColor: 'white',
          textAlign: 'center',
        }}
        dropdownStyles={{
          border: 0,
          borderRadius: 0,
          margin: 20,
          borderColor: 'white',
        }}
        dropdownTextStyles={{color: 'white'}}
        arrowicon={
          <FontAwesome name="chevron-down" size={12} color={'white'} />
        }
        searchicon={<FontAwesome name="search" size={12} color={'white'} />}
        closeicon={<FontAwesome name="close" size={12} color={'white'} />}
      />
      <View style={{marginTop: 0, marginLeft: 20, marginRight: 20}}>
        <Button
          title="Search"
          onPress={() => console.log(`search the ${selected}`)}
          color={DColor.appColor}
        />
      </View>
    </View>
  );
};

const SkuSelected = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={{}}>
      <SelectList
        setSelected={setSelected}
        data={data}
        // labelStyle={{color: 'white', textAlign: 'center'}}
        inputStyles={{color: 'white'}}
        placeholder="search"
        boxStyles={{
          border: 0,
          margin: 20,
          borderRadius: 0,
          borderColor: 'white',
          textAlign: 'center',
        }}
        dropdownStyles={{
          border: 0,
          borderRadius: 0,
          margin: 20,
          borderColor: 'white',
        }}
        dropdownTextStyles={{color: 'white'}}
        arrowicon={
          <FontAwesome name="chevron-down" size={12} color={'white'} />
        }
        searchicon={<FontAwesome name="search" size={12} color={'white'} />}
        closeicon={<FontAwesome name="close" size={12} color={'white'} />}
      />
    </View>
  );
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
