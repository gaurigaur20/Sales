import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const MyIcon = ({name, onPress, text}) => {
  return (
    <>
      <Pressable onPress={onPress} style={Styles.pressable}>
        <Icon name={name} onPress={onPress} style={Styles.icon}></Icon>
        <Text style={Styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const DashboardScreen = ({navigation}) => {
  return (
    <View style={Styles.root}>
      <View style={Styles.myIcon}>
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
      <View style={Styles.myIcon}>
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
      <View style={Styles.myIcon}>
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

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // marginRight: '10%',
    // marginLeft: '10%',
  },
  icon: {
    fontSize: 50,
    backgroundColor: 'red',
    height: 70,
    width: 70,
    borderRadius: 100 / 2,
  },
  text: {
    // fontSize: 15,
    // marginTop: '5%',
  },
  myIcon: {
    flexDirection: 'row',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent: 'space-around',
  },
});
