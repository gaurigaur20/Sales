import {View, Text} from 'react-native';
import React from 'react';

import EnquiryDetailScreen from '../EnquiryDetail';
import EnquiryFormPersonalInfoScreen from '../EnquiryFormSumbit';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AddEnquiryScreen = () => {
  return (
    // <View>
    //   <Text>
    //     Tab navigation here, one for personal detail and one for enquiry Detail.
    //   </Text>
    // </View>
    <Tab.Navigator>
      <Tab.Screen
        name="Personal Detail"
        component={EnquiryFormPersonalInfoScreen}
      />
      <Tab.Screen name="Enquiry Detail" component={EnquiryDetailScreen} />
    </Tab.Navigator>
  );
};

export default AddEnquiryScreen;
