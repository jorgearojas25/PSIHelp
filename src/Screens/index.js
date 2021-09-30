import React from 'react';
import MainApp from './Project';
import Login from './Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getEspecialidades} from '../store/reducers/dataReducer';
import {useDispatch} from 'react-redux';
import {topDocs} from '../store/reducers/searchReducer';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const isFirstStart = true;

  const isLoged = false;

  React.useEffect(() => {
    dispatch(getEspecialidades());
    dispatch(topDocs({IsDoctor: true}));
  }, []);

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
