/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CartScreen } from '../../Screens/'

const Stack = createStackNavigator();

const CartStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default CartStackNavigation;