import {View, Text, Alert} from 'react-native';
import React from 'react';

const promoteProspect = () => {
  Alert.alert(
    'Confirmation Needed !!!',
    'You are about to promote this prospect to Enquiry. Are you sure, you want to continue?',
    [
      {
        text: 'YES',
        onPress: () => null,
      },
      {
        text: 'NO',
        onPress: () => null,
        style: 'CANCEL',
      },
    ],
  );
};

export default promoteProspect;
