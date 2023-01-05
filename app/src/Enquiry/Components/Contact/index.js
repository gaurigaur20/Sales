import {
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
  StyleSheet,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const ContactScreen = ({navigation, route}) => {
  const {mobileNumber} = route.params;
  const [isEnquiryExist, setIsEnquiryExist] = useState(false);

  const dialNumber = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${mobileNumber}`;
    } else {
      phoneNumber = `telprompt:${mobileNumber}`;
    }
    Linking.openURL(phoneNumber);
  };

  console.log('mobile number', mobileNumber);
  console.log('enquiry', isEnquiryExist);

  useEffect(() => {
    if (mobileNumber == '9149185092') {
      setIsEnquiryExist(true);
    }
  }, []);
  const NoEnquiry = ({navigation}) => {
    return (
      <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{color: DColor.white}}>
            No such contact found. You can add new contact and enquiry.
          </Text>
          <Button
            title="ADD NEW ENQUIRY"
            color="red"
            onPress={() => navigation.navigate('Add Enquiry')}
          />
        </View>
      </ImageBackground>
    );
  };

  const EnquiryExists = ({navigation}) => {
    return (
      <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
        <View
          style={{
            margin: 20,
            backgroundColor: DColor.white,
            borderRadius: ActualHeight(12),
          }}>
          <View style={Styles.header}>
            <Text style={Styles.txtHeader}>ENQUIRY BASED DETAILS:</Text>
          </View>
          <View style={{margin: 20}}>
            <View>
              <Pressable
                onPress={() =>
                  navigation.navigate('CONTACT DETAILS', {mobileNumber})
                }>
                <Text style={{color: DColor.red}}>Name</Text>
              </Pressable>
              <Text style={{}}>
                <Text style={{fontWeight: 'bold'}}>Mobile:</Text>
                <Pressable onPress={() => dialNumber()}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: 'blue',
                    }}>
                    {mobileNumber}
                  </Text>
                </Pressable>
              </Text>
              <Text style={Styles.text}>
                <Text style={{fontWeight: 'bold'}}>State:</Text> Uttar Pradesh
              </Text>
              <Text style={Styles.text}>
                <Text style={{fontWeight: 'bold'}}>District:</Text> Agra
              </Text>
              <Text style={Styles.text}>
                <Text style={{fontWeight: 'bold'}}>Follow Date:</Text> Date Time
              </Text>
              <Text style={Styles.text}>
                <Text style={{fontWeight: 'bold'}}>DSE Name: </Text>Testing Id
              </Text>
              <View style={{alignSelf: 'flex-start'}}>
                <Button
                  title="GENERATE ENQUIRY"
                  onPress={() => navigation.navigate('ENQUIRY GENERATE')}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };
  return (
    <>
      {isEnquiryExist ? (
        <EnquiryExists navigation={navigation} />
      ) : (
        <NoEnquiry navigation={navigation} />
      )}
    </>
  );
};

export default ContactScreen;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: DColor.whitealfa,
    // margin: 10,
    borderRadius: ActualHeight(12),
    // alignItems: 'flex-start',
    justifyContent: 'center',
    height: ActualHeight(40),
  },
  txtHeader: {color: DColor.white, padding: 5, marginLeft: 10},
  text: {
    padding: 2,
    // fontSize: 12,
    // color: DColor.black,
  },
});
