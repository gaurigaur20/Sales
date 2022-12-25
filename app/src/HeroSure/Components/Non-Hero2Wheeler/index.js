import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

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

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ScrollView>
        <View style={Styles.header}>
          <Text style={Styles.text}>Enter Details</Text>
        </View>
        <View style={Styles.inputContainer}>
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            placeholder={''}
            onChangeText={value => setFirstName(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Last Name</Text>
          <TextInput
            value={lastName}
            placeholder={''}
            onChangeText={value => setLastName(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Age</Text>
          <TextInput
            value={age}
            placeholder={''}
            onChangeText={value => setAge(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Gender</Text>
          <TextInput
            value={gender}
            placeholder={''}
            onChangeText={value => setGender(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Mobile</Text>
          <TextInput
            value={mobileNumber}
            placeholder={''}
            onChangeText={value => setMobileNumber(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>State</Text>
          <TextInput
            value={state}
            placeholder={''}
            onChangeText={value => setState(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>District</Text>
          <TextInput
            value={district}
            placeholder={''}
            onChangeText={value => setDistrict(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Tehsil</Text>
          <TextInput
            value={tehsil}
            placeholder={''}
            onChangeText={value => setTehsil(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>City/Village/Town</Text>
          <TextInput
            value={city}
            placeholder={''}
            onChangeText={value => setCity(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Address1</Text>
          <TextInput
            value={address1}
            placeholder={''}
            onChangeText={value => setAddress1(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Address2</Text>
          <TextInput
            value={address2}
            placeholder={''}
            onChangeText={value => setAddress2(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Pincode</Text>
          <TextInput
            value={pincode}
            placeholder={''}
            onChangeText={value => setPincode(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Vehicle Make</Text>
          <TextInput
            value={vehicleMake}
            placeholder={''}
            onChangeText={value => setVehicleMake(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Vehicle Model</Text>
          <TextInput
            value={vehicleModel}
            placeholder={''}
            onChangeText={value => setVehicleModel(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Vin Number</Text>
          <TextInput
            value={vinNumber}
            placeholder={''}
            onChangeText={value => setVinNumber(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Number of Ownership</Text>
          <TextInput
            value={noOfOwnership}
            placeholder={''}
            onChangeText={value => setNumberOfOwnership(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Registration Number</Text>
          <TextInput
            value={registrationNumber}
            placeholder={''}
            onChangeText={value => setRegistrationNumber(value)}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.text}>Make Month and Year</Text>
          <TextInput
            value={makeMonth}
            placeholder={''}
            onChangeText={value => setMakeMonth(value)}
            style={Styles.textInput}
          />
        </View>
        <Button title="SUBMIT" onPress={() => console.log('form submitted')} />
      </ScrollView>
    </ImageBackground>
  );
};

export default NonHeroTwoWheelerScreen;

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
  },
});
