/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet,  View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import globalStyles from '../../config/GlobalStyles/styles'

const SearchComponent = ({ text, setText, onPress }) => {
    return (
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
                <FontAwesome5 name="qrcode" size={20} color={globalStyles.white} />
            </TouchableOpacity>
        </View>
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
    inputStyles: {
        backgroundColor: globalStyles.white,
        borderRadius: 25,
        paddingLeft: 80,
        width: '80%',
    }
})

export default SearchComponent
