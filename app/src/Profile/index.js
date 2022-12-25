import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';

import SharedManager from '../utils/SharedManager';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../utils/images';

const ProfileComponent = () => {
  const url =
    'https://hmclmobdiag.blob.core.windows.net/uploads/tso/profile_sample.jpg';
  const user = SharedManager.getInstance().getUser().login_id;
  return (
    <ImageBackground source={IMAGES.DRAWER_HEADER} style={{height: 150}}>
      <Image
        source={IMAGES.DRAWER_IMAGE}
        style={{width: 60, height: 40, resizeMode: 'contain', margin: 10}}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: url}}
          style={{
            resizeMode: 'center',
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
          }}
        />
        <Text style={{color: 'white'}}>{user}</Text>
      </View>
    </ImageBackground>
  );
};

export default ProfileComponent;
