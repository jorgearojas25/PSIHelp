import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../../../styles/theme';

// components
import HomeScreen from './Home';
import SearchResultsScreen from './SearchResults';
import Schedule from './Schedule';
import TabBar from '../../../Components/TabBar';
import AgendaScren from './Agenda';
import HistoryScreen from './History';
import CommentsScreen from './Comments';

const CoreApp = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'transparent'},
      }}
      initialRouteName="Start">
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
          hide: true,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          hide: true,
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          hide: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HistoryScreen}
        options={{
          myIcon: {color: theme.colors.ternary, name: 'heart', size: 28},
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaScren}
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
