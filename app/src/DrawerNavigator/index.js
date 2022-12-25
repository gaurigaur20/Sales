import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import DashboardScreen from '../Dashboard';
import WotCertificationScreen from '../WOT Certification';
import MmiScreen from '../MMI';
import WeConnectScreen from '../We Connect';
import ProductsScreen from '../Products';
import EnquiryScreen from '../Enquiry';
import ProspectScreen from '../Prospect';
import MyClickScreen from '../MyClick';
import ProductConfiguratorScreen from '../PRODUCT CONFIGURATOR';
import ValueAddedServicesScreen from '../VALUE ADDED SERVICES';
import CalculateEmiScreen from '../CALCULATE EMI';
import CircularsScreen from '../Circulars';
import ContactUsScreen from '../CONTACT US';
import ShareFeedbackScreen from '../SHARE FEEDBACK';

import CustomDrawer from '../CustomDrawer.js/index.js';

import Icon from 'react-native-vector-icons/FontAwesome';
import NewProspectScreen from '../Prospect/Components/NewProspect';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
import {notInitialized} from 'react-redux/es/utils/useSyncExternalStore';
const {ActualHeight, ActualWidth} = Global;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // drawerInactiveBackgroundColor: DColor.striking,
        drawerActiveTintColor: '',
        drawerActiveBackgroundColor: DColor.striking,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: Font.customFont.ft12,
          color: 'black',
          fontFamily: Font.fontFamily.regularCal,
        },
        drawerItemStyle: {
          // borderWidth: 1,
          // borderBottomColor: 'grey',
        },
        drawerStyle: {
          // backgroundColor: DColor.striking,
          // borderBottomColor: DColor.black,
          // borderWidth: 1,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <Icon name="home" size={22} color="black" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="WOT Certification"
        component={WotCertificationScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="MMI"
        component={MmiScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="We Connect"
        component={WeConnectScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="Product"
        component={ProductsScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }} */}
      {/* /> */}
      <Drawer.Screen
        name="ENQUIRY"
        component={EnquiryScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <Icon name="home" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Prospect "
        component={NewProspectScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <Icon name="home" size={22} color="black" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="MYCLICK"
        component={MyClickScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="PRODUCT CONFIGURATOR"
        component={ProductConfiguratorScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="VALUE ADDED SERVICES"
        component={ValueAddedServicesScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="CALCULATE EMI"
        component={CalculateEmiScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="CIRUCULARS"
        component={CircularsScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="CONTACT US"
        component={ContactUsScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="SHARE FEEDBACK"
        component={ShareFeedbackScreen}
        options={{
          drawerIcon: ({focused, size}) => <Icon name="home" size={size} />,
        }} */}
      {/* /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
