import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Linking,
  Pressable,
} from 'react-native';
import React from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const PreSubmitEnquiryDetailScreen = ({navigation, route}) => {
  // const {mobileNumber} = route.params;
  // const dialNumber = () => {
  //   let phoneNumber = '';
  //   if (Platform.OS === 'android') {
  //     phoneNumber = `tel:${mobileNumber}`;
  //   } else {
  //     phoneNumber = `telprompt:${mobileNumber}`;
  //   }
  //   Linking.openURL(phoneNumber);
  // };
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.txtContainer}>
        <Text style={Styles.text}>Name</Text>

        <Pressable onPress={() => console.log('calling a number....')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: 12,
              color: DColor.white,
              margin: 2,
            }}>
            MobileNumber
          </Text>
        </Pressable>

        <Text style={Styles.text}>Age/Gender</Text>
        <Text style={Styles.text}>Customer Id</Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Interested in :</Text>
          Model
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Expected date of Purchase :</Text>{' '}
          date
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Exchange required: </Text>Y/N
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Finance requirde:</Text> Y/N
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Existing Vehicle Type:</Text> first
          time buyer
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Followup Comments:</Text>Comments
        </Text>
        <Text style={Styles.text}>
          <Text style={{fontWeight: 'bold'}}>Next Followup: </Text>Date
        </Text>

        <View style={Styles.buttonContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 10,
            }}>
            <Button
              title="CLOSE"
              onPress={() => navigation.navigate('CLOSE ENQUIRY')}
              color={DColor.appColor}
            />
            <Button
              title="FOLLOWUP"
              onPress={() => navigation.navigate('FOLLOWUP ENQUIRY')}
              color={DColor.appColor}
            />
            <Button
              title="EDIT"
              onPress={() => navigation.navigate('Edit Enquiry')}
              color={DColor.appColor}
            />
          </View>
          <View style={Styles.button}>
            <Button
              title="TESTRIDE FEEDBACK"
              onPress={() => navigation.navigate('TEST RIDE FEEDBACK')}
              color={DColor.appColor}
            />
          </View>
          <View style={Styles.button}>
            <Button
              title="EXCHANGE VEHICLE"
              onPress={() => navigation.navigate('EXCHANGE VEHICLE')}
              color={DColor.appColor}
            />
          </View>
          <View style={Styles.button}>
            <Button
              title="PRINT PROFORMA INVOICE"
              onPress={() => navigation.navigate('PRINT PROFORMA INVOICE')}
              color={DColor.appColor}
            />
          </View>
          <View style={Styles.button}>
            <Button
              title="GENERATE ENQUIRY"
              onPress={() => navigation.navigate('ENQUIRY GENERATE')}
              color={DColor.appColor}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PreSubmitEnquiryDetailScreen;

const Styles = StyleSheet.create({
  txtContainer: {
    margin: 10,
  },

  text: {
    fontSize: 12,
    color: DColor.white,
    margin: 2,
  },

  buttonContainer: {
    marginTop: 10,
    backgroundColor: DColor.white,
    // height: ActualHeight(250),
  },
  button: {
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 8,
  },
});
