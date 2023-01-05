import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';

import RadioButtonRN from 'radio-buttons-react-native';
import DColor from '../../../../theme/colors';

const TestrideFeedbackScreen = () => {
  const ratings = [
    {
      label: 'Excellent',
    },
    {
      label: 'Very Good',
    },
    {
      label: 'Average',
    },
    {
      label: 'Very Poor',
    },
    {
      label: 'Poor',
    },
  ];
  const days = [
    {
      label: '1-15 days',
    },
    {
      label: '15-30 days',
    },
    {
      label: '30-60 days',
    },
    {
      label: '60-90 days',
    },
    {
      label: 'Not decided',
    },
  ];
  const agree = [
    {
      label: 'Yes',
    },
    {
      label: 'No',
    },
  ];

  return (
    <ScrollView>
      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>
          How would you rate the vehicle in terms of styling?{' '}
        </Text>
      </View>
      <RadioButtonRN data={ratings} selectedBtn={e => console.log(e)} />
      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>
          What do you think about the riding performance of the vehicle?
        </Text>
      </View>
      <RadioButtonRN data={ratings} selectedBtn={e => console.log(e)} />

      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>
          Are you happy with the features provided in the vehicle?
        </Text>
      </View>
      <RadioButtonRN data={agree} selectedBtn={e => console.log(e)} />
      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>
          When are you planning to buy the vehicle?
        </Text>
      </View>
      <RadioButtonRN data={days} selectedBtn={e => console.log(e)} />

      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>
          Will you refer this vehicle to your relatives and friends?{' '}
        </Text>
      </View>
      <RadioButtonRN data={agree} selectedBtn={e => console.log(e)} />

      <View style={Styles.header}>
        <Text style={{marginLeft: 30}}>Overall Rating? </Text>
      </View>
      <RadioButtonRN data={ratings} selectedBtn={e => console.log(e)} />

      <View>
        <Button
          title="Submit"
          onPress={() => console.log('feedback submitted successfully')}
          color={DColor.appColor}
        />
      </View>
    </ScrollView>
  );
};

export default TestrideFeedbackScreen;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: DColor.appColor,
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
  },
});
