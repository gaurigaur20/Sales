import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const NoInternet = () => {
  return (
    <View style={Styles.offlineContainer}>
      <Text style={Styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

export default NoInternet;

const Styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
  },
  offlineText: {color: '#fff'},
});
