/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet,  View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import globalStyles from '../../config/GlobalStyles/styles'

const SearchComponent = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search'
                placeholderTextColor={globalStyles.red}
                style={styles.inputStyles}
            />
            <AntDesign name='search1' size={20} color={globalStyles.red} style={styles.icon} />
            <View style={styles.btn}>
                <FontAwesome5 name="qrcode" size={20} color={globalStyles.white} />
            </View>
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
