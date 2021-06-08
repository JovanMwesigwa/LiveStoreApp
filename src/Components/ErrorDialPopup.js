/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, Dimensions, Modal } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppText } from '.';
import globalStyles  from '../../config/GlobalStyles/styles';

const ErrorDialPopup = ({visible, title, continueShopping}) => {

    const navigateHome = () => {
        continueShopping()
    }


  return (
      <Modal visible={visible}>
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.roundHeader}>
                    <Entypo name="circle-with-cross" size={45} color='white' fontWeight='700' />
                </View>
                <AppText fontSize={24} fontWeight='700' color='black'>Failed!</AppText>
                <AppText fontSize={14}>Your {title} was unable to go through</AppText>
                <AppText fontSize={14}>Verify that you have</AppText>
                <AppText fontSize={14}>1: You entered a valid phone number.</AppText>
                <AppText fontSize={14}>2: Sufficient money on your account.</AppText>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.continueBtn} onPress={navigateHome}>
                        <AppText fontSize={15} color='white' >Try again</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({ 
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    continueBtn: {
        borderRadius: 5,
        width: '100%',
        padding: 14,
        backgroundColor: globalStyles.red,
        marginBottom: 12
    },
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.8,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 2,
        margin: 45,        
    },
    roundHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        backgroundColor: "#5B54FA",
        marginBottom: 15
    }
});

export default ErrorDialPopup;