import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../../../styles/theme';

// components
import HomeScreen from './Home';
import SearchResultsScreen from './SearchResults';
import TabBar from '../../../Components/TabBar';

const CoreApp = () => {
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
        name="Start"
        component={HomeScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'home', size: 28},
        }}
      />
      <Tab.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'heart', size: 28},
        }}
      />
      <Tab.Screen
        name="OnBoarding"
        component={SearchResultsScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'book', size: 28},
        }}
      />
      <Tab.Screen
        name="Te"
        component={SearchResultsScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'comment', size: 28},
        }}
      />
    </Tab.Navigator>
  );
};

export default CoreApp;
