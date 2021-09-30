import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//componentes
import LoginForm from './LoginForm';
import SignUp from './SignUp';

const LoginScreens = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'transparent'},
      }}
      tabBar={props => null}>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
};

export default LoginScreens;
