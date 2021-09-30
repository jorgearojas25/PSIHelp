import React from 'react';

//components
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {stackScreens} from './screens';

const MainApp = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      {stackScreens.map(screen => {
        return (
          <Drawer.Screen
            key={screen.id}
            name={screen.name}
            component={screen.children}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default MainApp;
