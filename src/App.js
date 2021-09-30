/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from './Screens/index';

// Redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store({})}>
        <MainApp />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
