import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const LoaderScreen = () => {
  return (
    <View>
      <LottieView
        source={require('../../assets/loader2.json')}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});

export default LoaderScreen;
