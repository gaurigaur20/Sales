import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Button,
  ScrollView,
  Switch,
  Share,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';

const EnquiryDetailScreen = ({navigation}) => {
  const [model, setModel] = useState('');
  const [isExchangeRequired, setIsExchangeRequired] = useState(false);
  const [isFinanceRequired, setIsFinanceRequired] = useState(false);
  const [isTestRideTaken, setIsTestRideTaken] = useState(false);
  const [isExtTestRideRequired, setIsExtTestRideRequired] = useState(false);
  const [nextFollowupDate, setNextFollowupDate] = useState('');
  const [expectedDOP, setExpectedDOP] = useState('');
  const [remarks, setRemarks] = useState('');

  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pincode, setPincode] = useState('');

  const [awarenessSource, setAwarenessSource] = useState('');
  const [pointOfContact, setPointOfContact] = useState('');
  const [enquirySource, setEnquirySource] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  // console.log(date.toUTCString());

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const models = [
    'DESTINI 125',
    'GLAMOUR',
    'GLAMOUR XTEC',
    'HF 100',
    'HF DELUXE',
    'MAESTRO EDGE',
    'MAESTRO EDGE',
    'PASSION PRO',
    'PASSION XTEC',
    'PLEASURE+',
    'PLEASURE+ XTEC',
    'SPLENDOR +',
    'SPLENDOR ISMART',
    'SPLENDOR+ XTEC',
    'SUPER SPLENDOR',
    'XPULSE 200',
    'XPULSE 200 4V',
    'XPULSE 200T',
    'XTREME 160R',
    'XTREME 200S',
  ];

  const data = {
    message: 'Hello world!',
  };

  const shareCatalogue = () => {
    Share.share(data);
  };
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ScrollView>
        <View style={Styles.header}>
          <Text style={Styles.txtHeader}>Enquiry Detail</Text>
        </View>
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Model Interested in</Text>
            </View>
            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Select"
                buttonStyle={Styles.dropdown}
                buttonTextStyle={Styles.dropdownBtnTxtStyle}
                dropdownStyle={Styles.dropdownDropdownStyle}
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
                rowStyle={Styles.dropdownRowStyle}
                rowTextStyle={Styles.dropdownRowTxtStyle}
              />
            </View>
          </View>
        </View>

        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Share Catalogue</Text>
            </View>

            <View style={Styles.button}>
              <Button
                title="SHARE"
                onPress={() => shareCatalogue()}
                color={DColor.appColor}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Exchange Required</Text>
            </View>

            <View>
              <CheckBox
                value={isExchangeRequired}
                onValueChange={setIsExchangeRequired}
                style={Styles.checkbox}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Finance Required</Text>
            </View>

            <View>
              <CheckBox
                value={isFinanceRequired}
                onValueChange={setIsFinanceRequired}
                style={Styles.checkbox}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Test Ride Taken</Text>
            </View>

            <View>
              <CheckBox
                value={isTestRideTaken}
                onValueChange={setIsTestRideTaken}
                style={Styles.checkbox}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Extended Test Ride Required</Text>
            </View>

            <View>
              <CheckBox
                value={isExtTestRideRequired}
                onValueChange={setIsExtTestRideRequired}
                style={Styles.checkbox}
              />
            </View>
          </View>

          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Next Follow Up Date</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <Pressable
                onPress={() => setOpen(true)}
                style={Styles.selecDateContainer}>
                <Text
                  style={{
                    margin: 5,
                    fontSize: 12,
                    color: DColor.black,
                    textAlign: 'justify',
                  }}>
                  Select Date
                </Text>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  title="Select Date"
                  theme="light"
                  cancelText="Back"
                  confirmText="Confirm"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Expected Date of Purchase</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <Pressable
                onPress={() => setOpen(true)}
                style={Styles.selecDateContainer}>
                <Text
                  style={{
                    margin: 5,
                    fontSize: 12,
                    color: DColor.black,
                    textAlign: 'justify',
                  }}>
                  Select Date
                </Text>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  title="Select Date"
                  theme="light"
                  cancelText="Back"
                  confirmText="Confirm"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Remarks</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <TextInput
                value={remarks}
                placeholder={''}
                onChangeText={value => setRemarks(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
        </View>
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Address Detail</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <Switch
                trackColor={{false: 'grey', true: DColor.cyanBlue}}
                thumbColor={isEnabled ? 'blue' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={Styles.switch}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>State</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
              <Text style={Styles.text}>District</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
              <Text style={Styles.text}>Tehsil</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
              <Text style={Styles.text}>City/Village/Town</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
              <Text style={Styles.text}>Address1</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <TextInput
                value={address1}
                placeholder={''}
                onChangeText={value => setAddress1(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Address2</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <TextInput
                value={address2}
                placeholder={''}
                onChangeText={value => setAddress2(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Pincode</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <TextInput
                value={pincode}
                placeholder={''}
                onChangeText={value => setPincode(value)}
                style={Styles.textInput}
                keyboardType="number-pad"
                maxLength={6}
              />
            </View>
          </View>
        </View>
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Awareness Source</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Point of Contact</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
        <View style={Styles.mainContainer}>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Enquiry Source</Text>
            </View>

            <View style={Styles.textInputContainer}>
              <SelectDropdown
                data={models}
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
        <View style={Styles.mainContainer}>
          <View style={Styles.header}>
            <Text style={Styles.txtHeader}>Campaigns</Text>
          </View>
          <View></View>
        </View>
        <View style={{margin: 8}}>
          <Button
            title="SUBMIT"
            onPress={() => navigation.navigate('ENQUIRY DETAIL')}
            color={DColor.appColor}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EnquiryDetailScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: ActualHeight(6),
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
  button: {
    width: ActualWidth(180),
    height: ActualHeight(25),
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  switchContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  switch: {width: ActualWidth(205), height: ActualHeight(25)},

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
  checkbox: {
    width: ActualWidth(205),
    height: ActualHeight(25),
    // width: ActualWidth(180),
    // height: ActualHeight(25),
    // marginRight: 20,
    // alignSelf: 'flex-end',
  },
});
