/* eslint-disable prettier/prettier */
import React from 'react'
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { AppText } from '../../../Components';
import globalStyles from '../../../../config/GlobalStyles/styles';


import styles from './styles'

const SignupScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    mode="Outlined"
                    label="Email"
                    style={styles.inputStyles}
                    theme={{ colors: {
                        primary: globalStyles.red
                     } }}
                />
                <TextInput
                    mode="Outlined"
                    label="Password"
                    secureTextEntry
                    style={styles.inputStyles}
                    theme={{ colors: {
                        primary: globalStyles.red
                     } }}
                />
                <TouchableOpacity style={styles.btn} onPress={() => console.warn('Login')}>
                    <AppText fontSize={20} color="#C7BBBB" fontWeight='700'>Register</AppText>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen

