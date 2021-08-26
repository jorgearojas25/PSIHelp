import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from "./Login";
import OnBoardingScreen from "./OnBoarding";
import RegisterScreen from './Register';


const MainApp = () => {

    const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Register" component={RegisterScreen}/>
        <Tab.Screen name="OnBoarding" component={OnBoardingScreen}/>
    </Tab.Navigator>
  );
};

export default MainApp;
