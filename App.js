import React from 'react';
import {StatusBar} from 'react-native';
import colors from './App/config/colors';
import AppNavigation from './App/navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <AppNavigation />
    </>
  );
};

export default App;
