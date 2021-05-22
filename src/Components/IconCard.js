/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const IconCard = ({ name, selected, icon }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.topContainer}>
                <View style={[styles.iconContainer, {backgroundColor: selected ?  globalStyles.red :'white'}]}>
                    <Ionicons name={icon} size={35} color="#E5E5E5" />
                </View>
                <AppText color={selected ? globalStyles.red : globalStyles.darkBlue } fontSize={15} textAlign='center'>{name}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 150,
        width: 80,
        marginRight: 15
    },
    iconContainer: {
        alignItems: 'center',
        borderRadius: 50,
        elevation: 2,
        height: 80,
        marginBottom: 5,
        justifyContent: 'center',
        width: 80,
    },
    topContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})

export default IconCard
