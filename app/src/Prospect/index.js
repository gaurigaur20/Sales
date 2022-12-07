import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const ProspectScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  return (
    <View style={{flex: 1}}>
      <Button
        title="Today's Followup"
        onPress={() => navigation.navigate('Todays FollowupProspect')}
      />
      <Button
        title="Pending Followup"
        onPress={() => navigation.navigate('Pending FollowupProspect')}
      />

      <Button
        title="New Prospect"
        onPress={() => navigation.navigate('New Prospect')}
      />

      <TextInput
        value={mobileNumber}
        placeholder={'Mobile/Phone'}
        onChangeText={value => setMobileNumber(value)}
        maxLength={10}
      />
      <Button title="SEARCH PROSPECT" onPress={() => alert('coming soon!')} />
    </View>
  );
};

export default ProspectScreen;
