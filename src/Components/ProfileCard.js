/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import globalStyles from '../../config/GlobalStyles/styles'
import AppText from './AppText'

const ProfileCard = ({title, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>

                </View>
                <AppText fontSize={18} fontWeight="700">{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 0.5,
        padding: 12,
        width: Dimensions.get('window').width,
        marginVertical: 4
    },
    iconContainer: {
        borderRadius: 45/2,
        width: 45,
        backgroundColor:  globalStyles.lightGrey,
        height: 45,
        marginRight: 12
    }
})

export default ProfileCard
