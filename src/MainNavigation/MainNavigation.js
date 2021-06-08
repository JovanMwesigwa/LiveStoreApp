/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home, ProductDetailsScreen, CheckoutScreen } from '../Screens/'
import TabNavigator from './TabNavigation/TabNavigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MainNavigation;