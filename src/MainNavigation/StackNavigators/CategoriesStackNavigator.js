/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {CategoriesScreen } from '../../Screens/'

const Stack = createStackNavigator();

const CategoriesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppCategories" component={CategoriesScreen} options={{ title: 'Categories' }} />
    </Stack.Navigator>
  );
}

export default CategoriesStackNavigation;