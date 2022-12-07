import {View, Text, Pressable, Button} from 'react-native';
import React from 'react';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <Button title="Enquiry" onPress={() => navigation.navigate('Enquiry')} />
      <Button
        title="Prospect"
        onPress={() => navigation.navigate('Prospect')}
      />
      <Button
        title="Circular"
        onPress={() => navigation.navigate('Circular')}
      />
      <Button
        title="Available Stock"
        onPress={() => navigation.navigate('AvailableStock')}
      />
      <Button title="Sarthi" onPress={() => navigation.navigate('Sarthi')} />
      <Button
        title="Hero Sure"
        onPress={() => navigation.navigate('HeroSure')}
      />
      <Button title="My Click" onPress={() => navigation.navigate('MyClick')} />
    </View>
  );
};

export default DashboardScreen;
