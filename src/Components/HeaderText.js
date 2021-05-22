/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../../config/GlobalStyles/styles'

const HeaderText = ({children}) => {
    return (
        <Text style={styles.headerStyles}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    headerStyles: {
        fontSize: 25,
        color: globalStyles.darkBlue,
        fontWeight: '700',
    }
})

export default HeaderText
