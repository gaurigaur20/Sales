import {View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const ProspectListScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <View style={Styles.pressable}>
          <Pressable onPress={() => navigation.navigate('Prospect Details')}>
            <View>
              <View style={{margin: 10}}>
                <Text style={{fontSize: 12}}>ProspectID</Text>
                <Text style={{fontWeight: 'bold', color: DColor.black}}>
                  2-BBB24TT
                </Text>
              </View>
              <View style={{margin: 10}}>
                <Text style={{fontSize: 12}}>Customer Name</Text>
                <Text style={{fontWeight: 'bold', color: DColor.black}}>
                  Gauri
                </Text>
              </View>
            </View>
            <View
              style={{
                top: 0,
                bottom: 0,
                right: 30,
                position: 'absolute',
                //   margin: 5,
              }}>
              <View style={{margin: 10}}>
                <Text style={{fontSize: 12}}>Created Date</Text>
                <Text style={{fontWeight: 'bold', color: DColor.black}}>
                  date time format
                </Text>
              </View>
              <View style={{margin: 10}}>
                <Text style={{fontSize: 12}}>Customer Mobile No</Text>
                <Text style={{fontWeight: 'bold', color: DColor.black}}>
                  9149185092
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProspectListScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: DColor.white,
    height: ActualHeight(120),
    margin: 10,
    borderRadius: ActualHeight(12),
  },
  pressable: {
    margin: 10,
  },
});
