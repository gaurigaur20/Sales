import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import React from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const ContactDetailsScreen = ({navigation, route}) => {
  const {mobileNumber} = route.params;
  const dialNumber = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${mobileNumber}`;
    } else {
      phoneNumber = `telprompt:${mobileNumber}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View
        style={{
          margin: 10,
          backgroundColor: DColor.greyishBrown,
          // height: ActualHeight(180),
          borderRadius: ActualHeight(12),
        }}>
        <View style={Styles.individualContainers}>
          <Text style={{color: DColor.red, fontWeight: 'bold', fontSize: 16}}>
            Name,Age,gender
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>Mobile:</Text>
            <Pressable onPress={() => dialNumber()}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: DColor.white,
                }}>
                {mobileNumber}
              </Text>
            </Pressable>
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>Email:</Text> gaurigaur2018@xyz.com
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>State:</Text> Uttar Pradesh
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>District:</Text> Agra
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>Tehsil:</Text> Fatehabad
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>City: </Text>Agra
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>DSE Name:</Text> Testing
          </Text>
          <Text style={Styles.textFirstContainer}>
            <Text style={Styles.txtBold}>Customer Id:</Text> xyz
          </Text>
        </View>
      </View>
      <View style={Styles.mainConatiner}>
        <Pressable
          onPress={() => navigation.navigate('ENQUIRY DETAIL', {mobileNumber})}>
          <View style={Styles.header}>
            <Text style={Styles.txtHeader}>ENQUIRIES</Text>
          </View>
          <View style={Styles.individualContainers}>
            <Text style={Styles.text}>
              <Text style={Styles.txtBold}>Model:</Text> xyz
            </Text>
            <Text style={Styles.text}>
              <Text style={Styles.txtBold}>Date Of Enquiry:</Text> date
            </Text>
            <Text style={Styles.text}>
              <Text style={Styles.txtBold}>Exp Purchase Date:</Text> date
            </Text>
            <Text style={Styles.text}>
              <Text style={Styles.txtBold}>Next Followup Date:</Text> date
            </Text>
            <Text style={Styles.text}>
              <Text style={Styles.txtBold}>DSE Name:</Text> testing
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={Styles.mainConatiner}>
        <View style={Styles.header}>
          <Text style={Styles.txtHeader}>EXISTING VEHICLE DETAILS</Text>
        </View>
        <View style={Styles.individualContainers}></View>
      </View>
    </ImageBackground>
  );
};

export default ContactDetailsScreen;

const Styles = StyleSheet.create({
  mainConatiner: {
    // alignItems: 'flex-start',
    margin: 10,
    backgroundColor: DColor.white,
    // height: ActualHeight(180),
    borderRadius: ActualHeight(12),
  },
  individualContainers: {margin: 20},
  header: {
    backgroundColor: DColor.whitealfa,
    // margin: 10,
    padding: 2,
    borderRadius: ActualHeight(8),
    // alignItems: 'flex-start',
    justifyContent: 'center',
    height: ActualHeight(40),
  },
  txtHeader: {
    color: DColor.white,
    padding: 5,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  text: {
    padding: 2,
  },
  textFirstContainer: {
    color: DColor.white,
    padding: 2,
  },
  txtBold: {
    fontWeight: 'bold',
  },
});
