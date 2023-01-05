import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const NonHeroTwoWheelerScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('');

  const [pincode, setPincode] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vinNumber, setVinNumber] = useState('');
  const [noOfOwnership, setNumberOfOwnership] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [address2, setAddress2] = useState('');
  const [makeMonth, setMakeMonth] = useState('');

  const [email, setEmail] = useState('');

  const [expectPurchaseDate, setExpectPurchaseDate] = useState('');
  const [nextFollowupDate, setNextFollowupDate] = useState('');
  const [isRideTaken, setIsRideTaken] = useState(false);
  const [comments, setComments] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const models = [
    'DESTINI 125',
    'GLAMOUR',
    'GLAMOUR XTEC',
    'HF 100',
    'HF DELUXE',
    'MAESTRO EDGE',
    'MAESTRO EDGE 125',
    'PASSION PRO',
    'PASSION XTEC',
    'PLEASURE+',
    'PLEASURE+ XTEC',
    'SPLENDOR+',
    'SPLENDOR ISMART',
    'SPLENDOR+ XTEC',
    'SUPER SPLENDOR',
    'XPULSE 200',
    'XPULSE 200 4V',
    'XPULSE 200T',
    'XTREME 160R',
    'XTREME 200S',
  ];

  const enquirySources = [
    'Campaign',
    'Email',
    'Field Activity',
    'Financer',
    'RSE',
    'Showroom Referral',
    'VLE',
    'Walk-In',
    'Telephonic',
    'GMB Hyperlocal',
    'WhatsApp',
    'Facebook Local',
    'Instagram Local',
    'Youtube Local',
  ];

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ScrollView>
        <View style={Styles.header}>
          <Text style={{color: DColor.white, padding: 5, marginLeft: 10}}>
            Enter Details
          </Text>
        </View>
        <View style={Styles.mainContainer}>
          <View style={Styles.container}>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>First Name</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={firstName}
                  placeholder={' '}
                  onChangeText={value => setFirstName(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Last Name</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={lastName}
                  placeholder={' '}
                  onChangeText={value => setLastName(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Age</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={age}
                  placeholder={' '}
                  onChangeText={value => setAge(value)}
                  style={Styles.textInput}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Gender</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={enquirySources}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>Mobile</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={mobileNumber}
                  placeholder={' '}
                  onChangeText={value => setMobileNumber(value)}
                  style={Styles.textInput}
                  maxLength={10}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>State</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={models}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>District</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={enquirySources}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>Tehsil</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={models}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>City/Village/Town</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={enquirySources}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>Address1</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={address1}
                  placeholder={' '}
                  onChangeText={value => setAddress1(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Address2</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={address2}
                  placeholder={' '}
                  onChangeText={value => setAddress2(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Pincode</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={pincode}
                  placeholder={' '}
                  onChangeText={value => setPincode(value)}
                  style={Styles.textInput}
                  maxLength={6}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Vehicle Make</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={enquirySources}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>Vehicle Model</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <SelectDropdown
                  data={enquirySources}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  style={Styles.textInput}
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
                <Text style={Styles.text}>Vin number</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={vinNumber}
                  placeholder={' '}
                  onChangeText={value => setVinNumber(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Number of Ownership</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={noOfOwnership}
                  placeholder={' '}
                  onChangeText={value => setNumberOfOwnership(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Registration Number</Text>
              </View>
              <View style={Styles.txtInputContainer}>
                <TextInput
                  value={registrationNumber}
                  placeholder={' '}
                  onChangeText={value => setRegistrationNumber(value)}
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.inputContainer}>
              <View style={Styles.txtContainer}>
                <Text style={Styles.text}>Make Month and Year</Text>
              </View>
              <View
                style={{
                  flex: 2,
                }}>
                <View style={Styles.adjacentDropdownContainer}>
                  <SelectDropdown
                    data={enquirySources}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    style={Styles.textInput}
                    defaultButtonText="Select"
                    buttonStyle={Styles.adjacentDropdown}
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
                  <SelectDropdown
                    data={enquirySources}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    style={Styles.textInput}
                    defaultButtonText="Select"
                    buttonStyle={Styles.adjacentDropdown}
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
          </View>
        </View>
        <View style={Styles.button}>
          <Button
            title="SUBMIT"
            onPress={() => console.log('form submitted')}
            color={DColor.appColor}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NonHeroTwoWheelerScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: ActualHeight(12),
  },
  container: {
    // margin: 5,
  },
  header: {
    backgroundColor: DColor.red,
    margin: 5,
    // alignItems: 'flex-start',

    borderRadius: ActualHeight(5),
    height: ActualHeight(25),
  },
  txtContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  txtInputContainer: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  button: {margin: 5},
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
  selecDateContainer: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,

    height: ActualHeight(25),
    padding: 2,
  },
  checkbox: {
    width: ActualWidth(205),
    height: ActualHeight(25),
  },
  dropdown: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,
    height: ActualHeight(25),
    padding: 2,
  },
  adjacentDropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  adjacentDropdown: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(90),
    textAlign: 'left',
    fontSize: 12,
    height: ActualHeight(25),
    padding: 2,
    margin: 2,
  },
  dropdownBtnTxtStyle: {color: 'black', textAlign: 'left', fontSize: 12},
  // dropdownDropdownStyle: {backgroundColor: 'black'},
  // dropdownRowStyle: {backgroundColor: 'black', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 14},
});
