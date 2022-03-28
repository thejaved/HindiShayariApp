// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenName from '../config/screenName';
import {
  InEnglish,
  Home,
  MainContent,
  InHindi,
  Images,
  Splash,
} from '../screens';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenName.Splash} component={Splash} />
      <Stack.Screen name={screenName.Home} component={Home} />
      <Stack.Screen name={screenName.InEnglish} component={InEnglish} />
      <Stack.Screen name={screenName.InHindi} component={InHindi} />
      <Stack.Screen name={screenName.mainContent} component={MainContent} />
      <Stack.Screen name={screenName.images} component={Images} />
    </Stack.Navigator>
  );
}

export default AppStack;
