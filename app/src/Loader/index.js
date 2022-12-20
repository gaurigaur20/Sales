import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Keyboard,
} from 'react-native';
import {BallIndicator} from 'react-native-indicators';

const Loader = () => {
  return (
    <View style={styles.container}>
      <BallIndicator />
      {Keyboard.dismiss()}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import LottieView from 'lottie-react-native';

// const Loader = () => {
//   return (
//     <View>
//       <LottieView
//         source={require('../../assets/loader2.json')}
//         style={styles.animation}
//         autoPlay
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   animation: {
//     width: 100,
//     height: 100,
//   },
// });

// export default Loader;
