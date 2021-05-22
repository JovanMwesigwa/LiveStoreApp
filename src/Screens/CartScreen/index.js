/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import globalStyles from '../../../config/GlobalStyles/styles.js';
import AppText from '../../Components/AppText.js';
import CartItemCard from '../../Components/CartItemCard.js';

import styles from './styles.js'

const CartScreen = () => {
    return (
        <ScrollView style={styles.container}>
                <AppText {...styles.text}>My Cart</AppText>
            <View style={styles.cartInfo}>
                <CartItemCard />
                <CartItemCard />

                <View style={styles.cartPriceInfo}>
                    <View style={styles.textInfoContainer}>
                        <AppText color={globalStyles.white}>Total</AppText>
                        <AppText color={globalStyles.white}>UGX 880,000</AppText>
                    </View>
                    <View style={styles.textInfoContainer}>
                        <AppText color={globalStyles.white}>Sold by</AppText>
                        <AppText color={globalStyles.white}>LiveStore Trade</AppText>
                    </View>
                </View>

                <View style={styles.btn}>
                    <AppText color={globalStyles.white} fontSize={20}>Checkout</AppText>
                </View>
            </View>
        </ScrollView>
    )
}


export default CartScreen
