/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import globalStyles from '../../config/GlobalStyles/styles'

const AppScreen = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={globalStyles.lighterGrey} />
            {
                children
            }
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AppScreen
