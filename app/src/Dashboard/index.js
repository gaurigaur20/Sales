import {View, Text, Pressable} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const MyIcon = ({name, onPress, text}) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginRight: '10%',
          marginLeft: '10%',
        }}>
        <Icon
          name={name}
          onPress={onPress}
          style={{
            fontSize: 50,
            backgroundColor: 'red',
            height: 70,
            width: 70,
            borderRadius: 100 / 2,
          }}></Icon>
        <Text style={{fontSize: 15, marginTop: "5%"}}>{text}</Text>
      </Pressable>
    </>
  );
};

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('Products')}
          text="Products"
        />
        <MyIcon
          name="call"
          onPress={() => navigation.navigate('Enquiry')}
          text="Enquiry"
        />
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('Prospect')}
          text="Prospect"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('Circular')}
          text="Circular"
        />
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('AvailableStock')}
          text="Available Stock"
        />
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('Sarthi')}
          text="Sarthi"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('HeroSure')}
          text="Hero Sure"
        />
        <MyIcon
          name="bicycle-outline"
          onPress={() => navigation.navigate('MyClick')}
          text="myClick"
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
