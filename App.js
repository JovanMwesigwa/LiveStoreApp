/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AppScreen, AppText } from './src/Components/';
import AuthNavigation from './src/MainNavigation/AuthNavigation/AuthNavigation';
import MainNavigation from './src/MainNavigation/MainNavigation';

const App: () => Node = () => {

  const [ token, setToken ] = React.useState("asfdhagsfdahfd")

  const clearToken = () => {
    setToken(null);
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <AppScreen>
            {
              token ?
              <MainNavigation /> :
              <AuthNavigation  /> 
            }
        </AppScreen>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
