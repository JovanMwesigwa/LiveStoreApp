/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text,} from 'react-native';
import globalStyles from '../../config/GlobalStyles/styles';

const AppText = ({children, ...otherStyles}) => {
  return <Text style={[styles.text, {...otherStyles}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: globalStyles.darkBlue,
    fontSize: 16,
    // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Sans'
  },
});

export default AppText;
