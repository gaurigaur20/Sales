import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

import {useNavigationState} from '@react-navigation/native';

import StockTable from './table';

const AvailableStockScreen = () => {
  const state = useNavigationState(state => state);
  const routeName = state.routeNames;

  const currentRoute = routeName.filter(value => value === 'AvailableStock');
  console.log(`current route is ${currentRoute}`);
  const [orientation, setOrientation] = useState(true);
  const [portrait, setPortrait] = useState(false);
  return (
    <View style={{flex: 1}}>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />

      <Button
        title="Toggle Orientation"
        onPress={() => setOrientation(!orientation)}
      />
      {orientation && (
        <View style={{flex: 1}}>
          <OrientationLocker orientation={LANDSCAPE} />
          <StockTable />
        </View>
      )}
    </View>
  );
};

export default AvailableStockScreen;
