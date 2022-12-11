/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar, View, Text, Platform} from 'react-native';
import FlashMessage from 'react-native-flash-message';

import Splash from 'rnative-splash';

import Navigator from './app/index';
import DrawerNavigator from './app/index';

export default App = () => {
  useEffect(() => {
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }, []);

  return (
    <>
      <Navigator />
      <FlashMessage position="top" />
      {/* <DrawerNavigator /> */}
    </>
  );
};
