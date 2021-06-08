/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import { AppText } from '.';
import globalStyles  from '../../config/GlobalStyles/styles';

const AppCurtain = ({loading, payment, setLoading}) => {

  React.useEffect(() => {
    cancel()
  },[])

  const cancel = () => {
    setTimeout(() => {
      setLoading(false)
    }, 100000);
  }
  if (!loading) {
    return null;
  }
  return (
    <>
      <View
        style={[
          styles.curtain,
          {
            backgroundColor: payment ? globalStyles.red : '#fff',
            opacity: payment ? 1 : 0.5,
          },
        ]}
      />
      {payment && (
        <AppText color="#fff" {...styles.text}>
          Please Holdon while we process your transaction
        </AppText>
      )}
      <ActivityIndicator
        color={payment ? '#fff' : globalStyles.red}
        size={35}
        style={styles.loader}
        animating
      />
    </>
  );
};

const styles = StyleSheet.create({
  curtain: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    width: '100%',
    opacity: 0.5,
  },
  text: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    right: '50%',
    bottom: '45%',
    zIndex: 9999,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    zIndex: 99,
  },
});

export default AppCurtain;
