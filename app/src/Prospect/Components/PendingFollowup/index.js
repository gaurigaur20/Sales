import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import ProspectListScreen from '../ProspectList';

import IMAGES from '../../../utils/images';

const PendingFollowupPScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ProspectListScreen navigation={navigation} />
    </ImageBackground>
  );
};

export default PendingFollowupPScreen;
