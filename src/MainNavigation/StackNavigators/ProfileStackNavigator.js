/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {ProfileScreen } from '../../Screens/'

const Stack = createStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppProfile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigation;