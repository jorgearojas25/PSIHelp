import React from 'react';
import MainApp from './Project';
import Login from './Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MainNavigator = () => {
  const Tab = createBottomTabNavigator();
  const isFirstStart = true;

  const isLoged = false;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'transparent'},
      }}
      tabBar={props => null}>
      <Tab.Screen name="LoginScreen" component={Login} />
      <Tab.Screen name="MainScreen" component={MainApp} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
