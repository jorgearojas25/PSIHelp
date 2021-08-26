/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from './Screens/index';

const App = () => {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
};

export default App;
