import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';
const CloseEnquiryScreen = () => {
  const [remarks, setRemarks] = useState('');

  const usages = ['adfasdf', 'addfad'];

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Main Reason:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={usages}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select"
              buttonStyle={Styles.dropdown}
              buttonTextStyle={Styles.dropdownBtnTxtStyle}
              dropdownStyle={Styles.dropdownDropdownStyle}
              rowStyle={Styles.dropdownRowStyle}
              rowTextStyle={Styles.dropdownRowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={10}
                  />
                );
              }}
              dropdownIconPosition={'right'}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Sub Reason:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={usages}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select"
              buttonStyle={Styles.dropdown}
              buttonTextStyle={Styles.dropdownBtnTxtStyle}
              dropdownStyle={Styles.dropdownDropdownStyle}
              rowStyle={Styles.dropdownRowStyle}
              rowTextStyle={Styles.dropdownRowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={10}
                  />
                );
              }}
              dropdownIconPosition={'right'}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Make:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={usages}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select"
              buttonStyle={Styles.dropdown}
              buttonTextStyle={Styles.dropdownBtnTxtStyle}
              dropdownStyle={Styles.dropdownDropdownStyle}
              rowStyle={Styles.dropdownRowStyle}
              rowTextStyle={Styles.dropdownRowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={10}
                  />
                );
              }}
              dropdownIconPosition={'right'}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Model:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={usages}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select"
              buttonStyle={Styles.dropdown}
              buttonTextStyle={Styles.dropdownBtnTxtStyle}
              dropdownStyle={Styles.dropdownDropdownStyle}
              rowStyle={Styles.dropdownRowStyle}
              rowTextStyle={Styles.dropdownRowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={10}
                  />
                );
              }}
              dropdownIconPosition={'right'}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Remarks:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <TextInput
              value={remarks}
              multiline={true}
              placeholder=""
              onChangeText={value => setRemarks(value)}
              style={Styles.textInput}
            />
          </View>
        </View>
        <View style={Styles.button}>
          <Button
            onPress={() => console.log('Enquiry Closed')}
            title="SUBMIT"
            color={DColor.appColor}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default CloseEnquiryScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: ActualHeight(6),
  },
  txtContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  textInputContainer: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    margin: 7,
    fontSize: 14,
    color: DColor.black,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,

    height: ActualHeight(40),
    padding: 2,
  },
  dropdown: {
    backgroundColor: DColor.whitealfa,
    // width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,
    // height: ActualHeight(25),
    padding: 2,
  },
  dropdownBtnTxtStyle: {color: 'black', textAlign: 'left', fontSize: 14},
  // dropdownDropdownStyle: {backgroundColor: 'black'},
  // dropdownRowStyle: {backgroundColor: 'black', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 16},
  button: {
    margin: 10,
  },
});
