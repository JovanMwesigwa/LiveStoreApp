/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


import { HomeStackNavigation, CartStackNavigation,  ProfileStackNavigation, CategoriesStackNavigation } from '../StackNavigators/'
import globalStyles from '../../../config/GlobalStyles/styles';

const Tab = createBottomTabNavigator();


const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: '#fff',
    style: {
      backgroundColor: globalStyles.darkBlue
    },
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={customTabBarStyle}
      shifting="false"
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigation} 
        options={{
          tabBarLabel: 'Home',
          
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
          )
      }}
        />

      <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen 
        name="Categories" 
        component={CategoriesStackNavigation} 
        options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="apps" color={color} size={size} />
            )
        }}
      />

      {/* <Tab.Screen 
        name="Cart" 
        component={CartStackNavigation} 
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
          )
        }}
      /> */}

    </Tab.Navigator>
  );
}

export default TabNavigator;