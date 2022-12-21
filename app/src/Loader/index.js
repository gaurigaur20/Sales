// import React, {useState} from 'react';

// import {
//   SafeAreaView,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   Keyboard,
// } from 'react-native';
// import {BallIndicator} from 'react-native-indicators';

// const Loader = () => {
//   return (
//     <View style={styles.container}>
//       <BallIndicator />
//       {Keyboard.dismiss()}
//     </View>
//   );
// };

// export default Loader;

// const styles = StyleSheet.create({
//   container: {
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
// });

import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 50000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <LottieView
      autoPlay
      // loop={loop}
      source={require('../../assets/loader2.json')}
      style={styles.animation}
      speed={4}
      loop
      // progress={animationProgress.current}
    />
  );
};
export default Loader;
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
const styles = StyleSheet.create({
  animation: {
    // width: 100,
    // height: 100,
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    // position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
