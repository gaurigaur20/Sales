import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const EnquiryFormPersonalInfoScreen = ({navigate}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [area, setArea] = useState('');
  const [usage, setUsage] = useState('');
  const [vehicle, setVehicle] = useState('');

  const genders = ['M', 'F'];
  const occupations = [
    'Government Sector',
    'Private Sector',
    'Business Man',
    'Farmer/Farm Related',
    'Student',
    'Others',
  ];
  const areas = ['Rural', 'Urban'];
  const usages = ['Low Daily', 'High Daily', 'Family Usage'];
  const existingVehicles = ['Two Wheeler', 'Four Wheeler', 'First Time Buyer'];

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ScrollView>
        <View style={Styles.header}>
          <Text style={Styles.txtHeader}>Personal Info</Text>
        </View>
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>First Name</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <TextInput
                value={firstName}
                placeholder={''}
                onChangeText={value => setFirstName(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Last Name</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <TextInput
                value={lastName}
                placeholder={''}
                onChangeText={value => setLastName(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Mobile</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <TextInput
                value={mobileNumber}
                placeholder={''}
                onChangeText={value => setMobileNumber(value)}
                style={Styles.textInput}
                keyboardType="number-pad"
                maxLength={10}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Email</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <TextInput
                value={email}
                placeholder={''}
                onChangeText={value => setEmail(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Age</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <TextInput
                value={age}
                placeholder={''}
                onChangeText={value => setAge(value)}
                style={Styles.textInput}
                keyboardType="number-pad"
                maxLength={2}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Gender</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={genders}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Select Gender"
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
              <Text style={Styles.text}>Occupation</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={occupations}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Select Occupation"
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
              <Text style={Styles.text}>Rural/Urban</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={areas}
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
              <Text style={Styles.text}>Usage</Text>
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
              <Text style={Styles.text}>Existing Vehicle</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={existingVehicles}
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EnquiryFormPersonalInfoScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,

    borderRadius: ActualHeight(12),
  },

  header: {
    backgroundColor: DColor.whitealfa,
    margin: 10,
    borderRadius: ActualHeight(5),
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: ActualHeight(40),
  },
  txtHeader: {color: DColor.white, padding: 5, marginLeft: 10},
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
  button: {},

  text: {
    margin: 7,
    fontSize: 12,
    color: DColor.black,
  },
  textInput: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,

    height: ActualHeight(25),
    padding: 2,
  },
  dropdown: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,
    height: ActualHeight(25),
    padding: 2,
  },
  dropdownBtnTxtStyle: {color: 'black', textAlign: 'left', fontSize: 12},
  // dropdownDropdownStyle: {backgroundColor: 'black'},
  // dropdownRowStyle: {backgroundColor: 'black', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 14},
});
