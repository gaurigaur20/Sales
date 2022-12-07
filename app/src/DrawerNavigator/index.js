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

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen
        name="WOT Certification"
        component={WotCertificationScreen}
      />
      <Drawer.Screen name="MMI" component={MmiScreen} />
      <Drawer.Screen name="We Connect" component={WeConnectScreen} />
      <Drawer.Screen name="Product" component={ProductsScreen} />
      <Drawer.Screen name="ENQUIRY" component={EnquiryScreen} />
      <Drawer.Screen name="Prospect" component={ProspectScreen} />
      <Drawer.Screen name="MYCLICK" component={MyClickScreen} />
      <Drawer.Screen
        name="PRODUCT CONFIGURATOR"
        component={ProductConfiguratorScreen}
      />
      <Drawer.Screen
        name="VALUE ADDED SERVICES"
        component={ValueAddedServicesScreen}
      />
      <Drawer.Screen name="CALCULATE EMI" component={CalculateEmiScreen} />
      <Drawer.Screen name="CIRUCULARS" component={CircularsScreen} />
      <Drawer.Screen name="CONTACT US" component={ContactUsScreen} />
      <Drawer.Screen name="SHARE FEEDBACK" component={ShareFeedbackScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
