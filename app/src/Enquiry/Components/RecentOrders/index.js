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

const RecentOrdersScreen = () => {
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View
        style={{
          margin: 20,
          backgroundColor: DColor.white,
          borderRadius: ActualHeight(5),
        }}>
        <View style={Styles.header}>
          <Text style={Styles.txtHeader}>
            Customer Name: <Text style={{fontWeight: 'bold'}}>GAURI GAUR</Text>
          </Text>
        </View>
        <View style={{margin: 15, alignItems: 'flex-start'}}>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Model:</Text> Some Model
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Order Number:</Text> Order Number
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Dealer Code:</Text> Dealer Code
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Mobile: </Text> Mobile Number
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Order Date: </Text> Date Time
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Expected Date: </Text> Date
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Reason: </Text> Reason
          </Text>
          <Text style={Styles.text}>
            <Text style={{fontWeight: 'bold'}}>Campaign: </Text> Campaign
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RecentOrdersScreen;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: DColor.red,
    borderRadius: ActualHeight(1),
    justifyContent: 'center',
    height: ActualHeight(40),
  },
  txtHeader: {
    color: DColor.white,
    padding: 5,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  text: {
    padding: 2,
    // fontSize: 12,
    // color: DColor.black,
  },
});
