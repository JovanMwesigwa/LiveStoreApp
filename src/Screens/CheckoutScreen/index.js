/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, ScrollView, TextInput, ActivityIndicator,TouchableOpacity, Text } from 'react-native'
import {Tab, Tabs } from 'native-base';
import {AppText, IconComponent} from '../../Components/'

import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles.js';
import globalStyles from '../../../config/GlobalStyles/styles';

const MTN = require('../../../assets/MoMo.jpg')
const AIRTEL = require('../../../assets/airtel.png')


const CheckoutScreen = ({navigation, route}) => {

    const { image, item, qty } = route.params;

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <IconComponent rounded name='arrowleft' antDesign onPress={() => navigation.goBack()} />
                <AppText fontSize={18}>Checkout</AppText>
                <IconComponent rounded red name='shopping-cart' onPress={() => navigation.navigate('Cart')}/>
            </View>

            <View style={styles.itemCard}>
                <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.imageStyles}/>
                </View>
                <View style={styles.productInfoCard}>
                    <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
                    <AppText {...styles.qtyStyles}>Qty - {qty} </AppText>
                    <AppText {...styles.sellerText}>Sold by:</AppText>
                    <Text style={styles.sellerText} numberOfLines={1}>{item.store.name} </Text>
                </View>
                <View style={styles.pricesInfoCard}>
                    <AppText {...styles.priceText}>UGX {item.price}</AppText>
                </View>
            </View>

            <View style={styles.totalCard}>
                <View style={styles.infoCard}>
                    <AppText {...styles.subHeader}>SubTotal Price</AppText>
                    <AppText {...styles.subTotalPriceText}>UGX {item.price}</AppText>
                </View>
                <View style={styles.infoCard}>
                    <AppText {...styles.subHeader}>Total Price</AppText>
                    <AppText {...styles.totalPriceText}>UGX {item.price * qty}</AppText>
                </View>
            </View>

            <View style={styles.paymentsCard}>
                <AppText {...styles.paymentsTitle}>All Payments via Mobile Money</AppText>
                <View style={styles.logoContainer}>
                    <Image source={MTN} style={styles.logoStyles}/>
                    <Image source={AIRTEL} style={styles.logoStyles}/>
                </View>
            </View>

            <View style={styles.submitCard}>
                <AppText {...styles.actionText}>Enter your Mobile Money number below</AppText>
                <TextInput
                    placeholder="+2567XXXXXXXXX"
                    placeholderTextColor={globalStyles.lightGrey}
                    style={styles.inputStyles}
                />

                <TouchableOpacity style={styles.btnStyles}>
                    <AppText color={globalStyles.white}>Pay Order</AppText>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default CheckoutScreen

