import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../styles/theme';

// components
import HomeScreen from './Home';
import LoginScreen from './Login';
import OnBoardingScreen from './OnBoarding';
import RegisterScreen from './Register';
import TabBar from '../Components/TabBar';

const MainApp = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'transparent'},
      }}>
      <Tab.Screen
        name="Login"
        component={HomeScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'home', size: 28},
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'heart', size: 28},
        }}
      />
      <Tab.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'book', size: 28},
        }}
      />
      <Tab.Screen
        name="Te"
        component={OnBoardingScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'comment', size: 28},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
