import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import SelectDropdown from 'react-native-select-dropdown';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const FollowupEnquiryScreen = () => {
  const [isTestDrive, setIsTestDrive] = useState(false);
  const [isFinance, setIsFinance] = useState(false);
  const [isContacted, setIsContacted] = useState(false);
  const [isReferred, setIsReferred] = useState(false);
  const [isVisit, setIsVisit] = useState(false);
  const [followup, setFollowup] = useState('');

  const genders = ['adfasdf', 'addfad'];

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Contacted:</Text>
          <CheckBox value={isContacted} onValueChange={setIsContacted} />
        </View>

        <View style={Styles.header}>
          <Text style={Styles.text}>Next Schedule:</Text>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Follow Up Date:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={genders}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select Date"
              buttonStyle={Styles.dropdown}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Expected To Purchase: </Text>
          </View>

          <View style={Styles.textInputContainer}>
            <SelectDropdown
              data={genders}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Select Date"
              buttonStyle={Styles.dropdown}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Test Drive/Demo At Home:</Text>
          </View>

          <View>
            <CheckBox
              value={isTestDrive}
              onValueChange={setIsTestDrive}
              style={Styles.checkbox}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Finance details at home:</Text>
          </View>

          <View>
            <CheckBox
              value={isFinance}
              onValueChange={setIsFinance}
              style={Styles.checkbox}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Will Visit Dealership Again:</Text>
          </View>

          <View>
            <CheckBox
              value={isVisit}
              onValueChange={setIsVisit}
              style={Styles.checkbox}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Refer To GM:</Text>
          </View>

          <View>
            <CheckBox
              value={isReferred}
              onValueChange={setIsReferred}
              style={Styles.checkbox}
            />
          </View>
        </View>
        <View style={Styles.inputContainer}>
          <View style={Styles.txtContainer}>
            <Text style={Styles.text}>Followup Action:</Text>
          </View>

          <View style={Styles.textInputContainer}>
            <TextInput
              value={followup}
              multiline={true}
              placeholder=""
              onChangeText={value => setFollowup(value)}
              style={Styles.textInput}
            />
          </View>
        </View>
        <View style={{margin: 5}}>
          <Button
            onPress={() => console.log('Followup Closed')}
            title="SUBMIT"
            color={DColor.appColor}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default FollowupEnquiryScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: ActualHeight(6),
  },
  header: {
    backgroundColor: DColor.red,
    margin: 5,
    borderRadius: ActualHeight(5),
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    height: ActualHeight(30),
  },
  txtContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  textInputContainer: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    // padding: 5,
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
    padding: 4,
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
    height: ActualHeight(30),
    padding: 2,
  },
});
