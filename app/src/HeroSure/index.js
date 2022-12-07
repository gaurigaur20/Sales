import {View, Text, Button} from 'react-native';
import React from 'react';

const HeroSureScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Hero 2 Wheeler"
        onPress={() => navigation.navigate('HeroTwoWheeler')}
      />
      <Button
        title="Non-Hero 2 Wheeler"
        onPress={() => navigation.navigate('Non-HeroTwoWheeler')}
      />
    </View>
  );
};

export default HeroSureScreen;
