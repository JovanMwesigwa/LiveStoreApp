/* eslint-disable prettier/prettier */
import React from 'react'
import { Alert, Image, View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native'
import {AppCurtain, AppText, DialogPopup, ErrorDialPopup, IconComponent} from '../../Components/'
import axios from 'axios';
import FastImage from 'react-native-fast-image'


import styles from './styles.js';
import globalStyles from '../../../config/GlobalStyles/styles';

const MTN = require('../../../assets/MoMo.jpg')
const AIRTEL = require('../../../assets/airtel.png')


const CheckoutScreen = ({navigation, route}) => {

    const [ phone, setPhone ] = React.useState("");

    const [ txRefNumber, setTxRefNumber ] = React.useState()

    const [ loading, setLoading ] = React.useState(false)

    const [visible, setVisible] = React.useState(false);

    const [errorEisible, setErrorVisible] = React.useState(false);

    const { image, item, qty } = route.params;

    React.useEffect(() => {
        setTxRefNumber(generateString(10));
    },[])

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
  
    const showErrorDialog = () => setErrorVisible(true);
  
    const hideErrorDialog = () => setErrorVisible(false);

    const handlePay = async() => {

        setLoading(true)

        setTxRefNumber(generateString(10))

        if(phone === "") {
            showAlert();
        }else {
            
            const data = {
                "username": "6b7a129208b7860c",
                "password": "0e7194232cbde9c2",
                "action":"mmdeposit",
                "amount": getTotalCost(),
                "currency":"UGX",
                "phone":`256${phone}`,
                "reference": `${phone}${txRefNumber}${item.price}`,
                "reason":`
                    ${phone} has placed Order of ${item.name} items worth  ${item.price}
                `
            }
            
            try{
                const response = await axios.post('https://www.easypay.co.ug/api/', data)
                toggleDialog(response.data.success)
                setLoading(false);
            }catch(err) {   
                console.log(err);
                setLoading(false);
            }
            setLoading(false);
        }
    }

    const toggleDialog = successMsg => {
        if(successMsg === 1){
            showDialog()
        }else if(successMsg === ""){
            setLoading(false);
        }else{
            showErrorDialog()
            console.log('We couldnot complete your transaction')
        }
    }

    const showAlert = () => {  
        Alert.alert(  
            'No Number',  
            'You need to add a number to submit',  
            [   
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
    }

    const characters ='0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    const getTotalCost = () => {
        const totalCosts = item.price * qty
        return totalCosts;
      }

    const continueShopping = () => {
        setPhone("")
        hideDialog()
        hideErrorDialog()
    }

    if(loading) return <AppCurtain payment loading={loading} setLoading={setLoading} />

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <IconComponent rounded name='arrowleft' antDesign onPress={() => navigation.goBack()} />
                <AppText fontSize={18}>Checkout</AppText>
                <IconComponent rounded red name='shopping-cart' onPress={() => navigation.navigate('Cart')}/>
            </View>

            <View style={styles.itemCard}>
                <View style={styles.imageContainer}>
                        <FastImage 
                            source={{ 
                                uri: image,
                                priority: FastImage.priority.high,
                             }} 
                             resizeMode={FastImage.resizeMode.cover}
                             style={styles.imageStyles}
                        />
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
                    value={phone}
                    keyboardType="number-pad"
                    onChangeText={text => setPhone(text)}
                />

                <TouchableOpacity style={styles.btnStyles} onPress={handlePay}>
                    <AppText color={globalStyles.white}>Pay Order</AppText>
                </TouchableOpacity>
            </View>

            <DialogPopup visible={visible} onPress={hideDialog} continueShopping={continueShopping} />
            <ErrorDialPopup visible={errorEisible} title='Order' onPress={hideDialog} continueShopping={continueShopping} />

        </ScrollView>
    )
}

export default CheckoutScreen

