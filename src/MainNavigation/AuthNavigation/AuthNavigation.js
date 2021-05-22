/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {AppSplashScreen, LoginScreen, SignupScreen } from '../../Screens/'

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppSplashScreen" component={AppSplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AppLogin" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="AppSignup" component={SignupScreen} options={{ title: 'Register' }} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;