import React, {useEffect} from 'react';
import {View, Text, Alert, BackHandler, LogBox} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './src/Login';
import OtpScreen from './src/Otp';
import SplashScreen from './src/Splash';

// ******************** Dashboard Components ***************************

import ProductsScreen from './src/Products';
import EnquiryScreen from './src/Enquiry';
import ProspectScreen from './src/Prospect';
import CircularScreen from './src/Circulars';
import AvailableStockScreen from './src/AvailableStock';
import SarthiScreen from './src/Sarthi';
import HeroSureScreen from './src/HeroSure';
import MyClickScreen from './src/MyClick';

// ********************* Drawer Navigation Components **********************
import WotCertificationScreen from './src/WOT Certification';
import MmiScreen from './src/MMI';
import WeConnectScreen from './src/We Connect';
import ProductConfiguratorScreen from './src/PRODUCT CONFIGURATOR';
import ValueAddedServicesScreen from './src/VALUE ADDED SERVICES';
import CalculateEmiScreen from './src/CALCULATE EMI';
import ContactUsScreen from './src/CONTACT US';
import ShareFeedbackScreen from './src/SHARE FEEDBACK';

// ********************** Drawer Navigator *******************
import DrawerNavigator from './src/DrawerNavigator';

// ****************************** Enquiry Components *********************
import RecentOrdersScreen from './src/Enquiry/Components/RecentOrders';
import TodaysFollowupScreen from './src/Enquiry/Components/TodaysFollowup';
import PendingFollowupScreen from './src/Enquiry/Components/PendingFollowup';
import SearchEnquiryScreen from './src/Enquiry/Components/SearchEnquiry';
import FailedEnquiryScreen from './src/Enquiry/Components/FailedEnquiry';
import ExchangeDetailsScreen from './src/Enquiry/Components/ExchangeDetails';
import CutomerInteractionScreen from './src/Enquiry/Components/CustomerInteraction';

// ********************** Prospect Component *********************
import TodaysFollowupPScreen from './src/Prospect/Components/TodaysFollowup';
import PendingFollowupPScreen from './src/Prospect/Components/PendingFollowup';
import NewProspectScreen from './src/Prospect/Components/NewProspect';

// ********************************* Hero Sure Component ********************
import HeroTwoWheelerScreen from './src/HeroSure/Components/Hero2Wheeler';
import NonHeroTwoWheelerScreen from './src/HeroSure/Components/Non-Hero2Wheeler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const navigationRef = React.createRef();

LogBox.ignoreAllLogs();

const Navigator = () => {
  const handleBackButton = () => {
    const currentRoute = navigationRef.current.getCurrentRoute();
    if (
      currentRoute.name.toLowerCase() === 'login' ||
      currentRoute.name.toLowerCase() === 'dashboard'
    ) {
      backAction();
    } else {
      if (navigationRef.current.canGoBack()) {
        navigationRef.current.goBack();
      }
    }
    return true;
  };
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        {/* **************************** Dashboard Components *************************************** */}

        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Enquiry" component={EnquiryScreen} />
        <Stack.Screen name="Prospect" component={ProspectScreen} />
        <Stack.Screen name="Circular" component={CircularScreen} />
        <Stack.Screen name="AvailableStock" component={AvailableStockScreen} />
        <Stack.Screen name="Sarthi" component={SarthiScreen} />
        <Stack.Screen name="HeroSure" component={HeroSureScreen} />
        <Stack.Screen name="MyClick" component={MyClickScreen} />
        {/* ******************************  Drawer Components ******************************************** */}
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WOT Certification"
          component={WotCertificationScreen}
        />
        <Stack.Screen name="MMI" component={MmiScreen} />
        <Stack.Screen name="We Connect" component={WeConnectScreen} />
        <Stack.Screen
          name="PRODUCT CONFIGURATOR"
          component={ProductConfiguratorScreen}
        />
        <Stack.Screen
          name="VALUE ADDED SERVICES"
          component={ValueAddedServicesScreen}
        />
        <Stack.Screen name="CALCULATE EMI" component={CalculateEmiScreen} />
        <Stack.Screen name="CONTACT US" component={ContactUsScreen} />
        <Stack.Screen name="SHARE FEEDBACK" component={ShareFeedbackScreen} />

        {/* ********************************* Enquiry Components ******************************* */}
        <Stack.Screen name="Recent Orders" component={RecentOrdersScreen} />
        <Stack.Screen name="Todays Followup" component={TodaysFollowupScreen} />
        <Stack.Screen
          name="Pending Followup"
          component={PendingFollowupScreen}
        />
        <Stack.Screen name="Search Enquiry" component={SearchEnquiryScreen} />
        <Stack.Screen
          name="Exchange Details"
          component={ExchangeDetailsScreen}
        />
        <Stack.Screen name="Failed Enquiry" component={FailedEnquiryScreen} />
        <Stack.Screen
          name="Customer Interaction"
          component={CutomerInteractionScreen}
        />

        {/* **************************** Prospect Components ********************************* */}

        <Stack.Screen
          name="Todays FollowupProspect"
          component={TodaysFollowupPScreen}
        />
        <Stack.Screen
          name="Pending FollowupProspect"
          component={PendingFollowupPScreen}
        />
        <Stack.Screen name="New Prospect" component={NewProspectScreen} />

        {/* *****************  Hero Sure Components ***************************** */}
        <Stack.Screen name="HeroTwoWheeler" component={HeroTwoWheelerScreen} />
        <Stack.Screen
          name="Non-HeroTwoWheeler"
          component={NonHeroTwoWheelerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
