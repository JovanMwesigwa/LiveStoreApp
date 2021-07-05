/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const CardInfoComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.newContainer}>
                <AppText {...styles.new}>NEW</AppText>
            </View>
            <AppText {...styles.headerText}>IPhone 12</AppText>
            <AppText fontSize={12} color={globalStyles.white}>Super, Mega 4</AppText>
            <View style={styles.btn}>
                <AppText fontSize={12} fontWeight='700'>Avaliable</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: globalStyles.white,
        padding: 4,
        marginTop: 10,
        width: '70%',
    },
    container: {
        position: 'absolute',
        left: 0,
        padding: 12,
        zIndex: 999
    },
    new: {
        fontSize: 11,
        color: globalStyles.white,
    },
    newContainer: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        borderRadius: 40/2,
        height: 40,
        justifyContent: 'center',
        width: 40
    },
    headerText: {
        fontSize: 25,
        fontWeight: '700',
        color: globalStyles.white,
    }
})

export default CardInfoComponent
