/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet,  View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AppText } from '.'

import globalStyles from '../../config/GlobalStyles/styles'

const SearchComponent = ({ text, setText, navigate, onPress, home }) => {
    return (
        <>
        {
            home ? 
            <TouchableWithoutFeedback onPress={navigate}>
                <View style={styles.container}>
                <View
                    style={styles.textInputStyles}
                >
                    <AppText color={globalStyles.red}>Search</AppText>
                </View>
                <AntDesign name='search1' size={20} color={globalStyles.red} style={styles.icon} />
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <FontAwesome5 name="qrcode" size={20} color={globalStyles.white} />
                </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback> :
            <View style={styles.container}>

                <TextInput
                    placeholder='Search'
                    placeholderTextColor={globalStyles.red}
                    style={styles.inputStyles}
                    value={text}
                    onChangeText={setText}
                />
                <AntDesign name='search1' size={20} color={globalStyles.red} style={styles.icon} />
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <FontAwesome5 name="paper-plane" size={20} color={globalStyles.white} />
                </TouchableOpacity>
            </View>
        }
        </>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: globalStyles.red,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    icon: {
        position: 'absolute',
        left: 55
    },
    container : {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: 'space-between',
    },
    textInputStyles: {
        backgroundColor: globalStyles.white,
        borderRadius: 25,
        paddingLeft: 80,
        paddingVertical: 12,
        width: '80%',
    },
    inputStyles: {
        backgroundColor: globalStyles.white,
        borderRadius: 25,
        paddingLeft: 80,
        width: '80%',
    }
})

export default SearchComponent
