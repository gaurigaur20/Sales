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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';

import DatePicker from 'react-native-date-picker';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const EditProspectScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [email, setEmail] = useState('');

  const [expectPurchaseDate, setExpectPurchaseDate] = useState('');
  const [nextFollowupDate, setNextFollowupDate] = useState('');
  const [isRideTaken, setIsRideTaken] = useState(false);
  const [comments, setComments] = useState('');
  const [remark, setRemark] = useState('');

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
              <Text style={Styles.text}>Mobile</Text>
            </View>
            <View style={Styles.txtInputContainer}>
              <TextInput
                value={mobileNumber}
                placeholder={' '}
                onChangeText={value => setMobileNumber(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Model Interested in</Text>
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
              <Text style={Styles.text}>Email id</Text>
            </View>
            <View style={Styles.txtInputContainer}>
              <TextInput
                value={email}
                placeholder={' '}
                onChangeText={value => setEmail(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Enquiry Source</Text>
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
              <Text style={Styles.text}>Expected Purchase Date</Text>
            </View>
            <View style={Styles.txtInputContainer}>
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
              <Text style={Styles.text}>Next Followup Date</Text>
            </View>
            <View style={Styles.txtInputContainer}>
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
              <Text style={Styles.text}>Test Ride Taken</Text>
            </View>
            <View>
              <CheckBox
                value={isRideTaken}
                onValueChange={setIsRideTaken}
                style={Styles.checkbox}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Comments</Text>
            </View>
            <View style={Styles.txtInputContainer}>
              <TextInput
                value={comments}
                placeholder={' '}
                onChangeText={value => setComments(value)}
                style={Styles.textInput}
              />
            </View>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.txtContainer}>
              <Text style={Styles.text}>Remark</Text>
            </View>
            <View style={Styles.txtInputContainer}>
              <TextInput
                value={remark}
                placeholder={' '}
                onChangeText={value => setRemark(value)}
                style={Styles.remark}
                multiline={true}
              />
            </View>
          </View>
        </View>
        <View style={Styles.button}>
          <Button
            title="UPDATE DETAILS"
            onPress={() => console.log('updated successfully')}
            color={DColor.appColor}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EditProspectScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: ActualHeight(12),
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
  dropdownBtnTxtStyle: {color: 'black', textAlign: 'left', fontSize: 12},
  // dropdownDropdownStyle: {backgroundColor: 'black'},
  // dropdownRowStyle: {backgroundColor: 'black', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 14},
  remark: {
    backgroundColor: DColor.whitealfa,
    width: ActualWidth(180),
    textAlign: 'left',
    fontSize: 12,

    height: ActualHeight(35),
    padding: 2,
  },
});
