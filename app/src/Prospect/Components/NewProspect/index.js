import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const NewProspectScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [model, setModel] = useState('');
  const [email, setEmail] = useState('');
  const [enquirySource, setEnquirySource] = useState('');
  const [expectPurchaseDate, setExpectPurchaseDate] = useState('');
  const [nextFollowupDate, setNextFollowupDate] = useState('');
  const [isRideTaken, setIsRideTaken] = useState(false);
  const [comments, setComments] = useState('');

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.header}>
        <Text style={Styles.text}>Enter Details</Text>
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>First Name</Text>
        <TextInput
          value={firstName}
          placeholder={'Enter User Id'}
          onChangeText={value => setFirstName(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Last Name</Text>
        <TextInput
          value={lastName}
          placeholder={'Enter User Id'}
          onChangeText={value => setLastName(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Mobile</Text>
        <TextInput
          value={mobileNumber}
          placeholder={'Enter User Id'}
          onChangeText={value => setMobileNumber(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Model Interested in</Text>
        <TextInput
          value={model}
          placeholder={'Enter User Id'}
          onChangeText={value => setModel(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Email id</Text>
        <TextInput
          value={email}
          placeholder={'Enter User Id'}
          onChangeText={value => setEmail(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Enquiry Source</Text>
        <TextInput
          value={enquirySource}
          placeholder={'Enter User Id'}
          onChangeText={value => setEnquirySource(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Expected Purchase Date</Text>
        <TextInput
          value={expectPurchaseDate}
          placeholder={'Enter User Id'}
          onChangeText={value => setExpectPurchaseDate(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Next Followup Date</Text>
        <TextInput
          value={nextFollowupDate}
          placeholder={'Enter User Id'}
          onChangeText={value => setNextFollowupDate(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Test Ride Taken</Text>
        <TextInput
          value={isRideTaken}
          placeholder={'Enter User Id'}
          onChangeText={value => setIsRideTaken(value)}
          style={Styles.textInput}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.text}>Comments</Text>
        <TextInput
          value={comments}
          placeholder={'Enter User Id'}
          onChangeText={value => setComments(value)}
          style={Styles.textInput}
        />
      </View>
      <Button title="SUBMIT" onPress={() => console.log('form submitted')} />
    </ImageBackground>
  );
};

export default NewProspectScreen;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    padding: 5,
  },
  button: {},
  text: {},
  textInput: {
    backgroundColor: 'grey',
    marginLeft: 15,
    width: ActualWidth(200),
    // height: ActualHeight(20),
  },
});
