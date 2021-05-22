/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AppText, IconComponent } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const image = require('../../assets/image.png')

const CartItemCard = () => {
    return (
        <View style={styles.cartItemCard}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.imageStyles} />
            </View>
            <View style={styles.infoContainer}>
                <AppText {...styles.headerText}>Galaxy Note 20 Ultra</AppText>
                <AppText {...styles.priceText}>UGX 640,000</AppText>
            </View>
            <View style={styles.btnsContainer}>
                <View style={styles.btns}>
                    <View style={styles.editBtn}>
                        <AntDesign name="plus" size={18} color={globalStyles.white}/>
                    </View>
                    <TextInput 
                        style={styles.inputStyles}
                    >
                        <AppText color={globalStyles.white} >2</AppText>
                    </TextInput>
                    <View style={styles.editBtn}>
                        <AntDesign name="minus" size={18} color={globalStyles.white}/>
                    </View>
                </View>
                <IconComponent name='trash'  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btns: {
        alignItems: 'center',
        backgroundColor: '#282843',
        borderRadius: 26,
        paddingVertical: 8,
        justifyContent: 'center',
        marginHorizontal: 2,
    },
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editBtn: {

    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    imageStyles: {
        flex: 1,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    inputStyles: {
        paddingLeft: 15
    },
    headerText: {
        color: globalStyles.white,
        fontSize: 18
    },
    priceText: {
        color: globalStyles.red,
        fontSize: 18,
        fontWeight: '700'
    },
    cartItemCard: {
        flexDirection: 'row',
        height: 100,
        marginVertical: 20
    }
})

export default CartItemCard
