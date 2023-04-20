import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
