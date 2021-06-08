/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, Dimensions, Modal } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { AppText } from '.';
import globalStyles  from '../../config/GlobalStyles/styles';


const DialogPopup = ({visible, subscription, packageName, continueShopping}) => {

    const navigateHome = () => {
        continueShopping()
    }


  return (
      <Modal visible={visible}>
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.roundHeader}>
                    <Feather name="check-circle" size={45} color='white' fontWeight='700' />
                </View>
                <AppText fontSize={24} fontWeight='700' color='black'>Success</AppText>
                {
                    subscription ?
                        <AppText fontSize={14}>Congrats!, You have switched to {packageName} A/C.</AppText> 
                    :
                    <>
                        <AppText fontSize={14}>Thanks! Your Order will be delivered soon</AppText>
                        <AppText fontSize={14}>Feel free to track it in 'My Orders' section.</AppText> 
                    </>
                }

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.continueBtn} onPress={navigateHome}>
                        <AppText fontSize={15} color='white' >
                            {
                                !subscription ? 
                                "Continue Shopping" :
                                "Continue Selling"
                            }
                        </AppText>
                    </TouchableOpacity>
                    {
                        !subscription &&
                        <AppText fontSize={15} >Go to Orders</AppText>
                    }
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

export default DialogPopup;