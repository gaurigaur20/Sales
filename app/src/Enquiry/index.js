import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const EnquiryScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  return (
    <View style={{flex: 1}}>
      <Button
        title="Recent Orders"
        onPress={() => navigation.navigate('Recent Orders')}
      />
      <Button
        title="Today's Followup"
        onPress={() => navigation.navigate('Todays Followup')}
      />
      <Button
        title="Pending Followup"
        onPress={() => navigation.navigate('Pending Followup')}
      />
      <Button
        title="Search Enquiry"
        onPress={() => navigation.navigate('Search Enquiry')}
      />
      <Button
        title="Exchange Details"
        onPress={() => navigation.navigate('Exchange Details')}
      />
      <Button
        title="Failed Enquiry"
        onPress={() => navigation.navigate('Failed Enquiry')}
      />
      <Button
        title="Customer Interaction"
        onPress={() => navigation.navigate('Customer Interaction')}
      />

      <TextInput
        value={mobileNumber}
        placeholder={'Mobile/Registration Number'}
        onChangeText={value => setMobileNumber(value)}
        maxLength={10}
      />
      <Button title="NEXT" onPress={() => alert('coming soon!')} />
    </View>
  );
};

export default EnquiryScreen;
