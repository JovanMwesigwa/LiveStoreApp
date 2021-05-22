/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const phone = require('../../assets/phone.png')

const ProductCardComponent = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.imageContainer}>
                        <Image source={phone} style={styles.imageStyles} />
                    </View>
                    <AppText color={globalStyles.red}>UGX 350,000</AppText>
                    <AppText color={globalStyles.lightGrey} fontSize={12}>UGX 350,000</AppText>
                    <AppText color={globalStyles.darkBlue} fontSize={12}>Samsung Galaxy Note s20 Ultra</AppText>
                </View>
                <View style={styles.right}>
                    <View style={styles.imageContainer}>
                        <Image source={phone} style={styles.imageStyles} />
                    </View>
                    <AppText color={globalStyles.red}>UGX 350,000</AppText>
                    <AppText color={globalStyles.lightGrey} fontSize={12}>UGX 350,000</AppText>
                    <AppText color={globalStyles.darkBlue} fontSize={12}>Samsung Galaxy Note s20 Ultra</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    right: {
        borderRadius: 8,
        marginLeft: 8,
        elevation: 2,
        flex: 1,
        backgroundColor: globalStyles.white,
        padding: 15
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyles: {
        flex: 1,
        resizeMode: 'contain',
    },
    left: {
        borderRadius: 8,
        marginRight: 8,
        elevation: 2,
        flex: 1,
        backgroundColor: globalStyles.white,
        padding: 15
    }
})

export default ProductCardComponent
