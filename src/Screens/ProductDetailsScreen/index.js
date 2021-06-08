/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, ScrollView, TextInput, ActivityIndicator,TouchableOpacity } from 'react-native'
import {Tab, Tabs } from 'native-base';
import {AppText, IconComponent} from '../../Components/'

import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles.js';
import globalStyles from '../../../config/GlobalStyles/styles';


const ProductDetailsScreen = ({navigation, route}) => {

    const [ count, setCount ] = React.useState(1)
    const { ID, item, loading, error } = route.params;

    var imageRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
    let image = item.yoast_head.match(imageRegex)

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <IconComponent rounded name='arrowleft' antDesign onPress={() => navigation.goBack()} />
                <AppText fontSize={18}>Product Details</AppText>
                <IconComponent rounded red name='shopping-cart' onPress={() => navigation.navigate('Cart')}/>
            </View>

            {
                !error &&
                <>
                {
                loading ? 
                    <ActivityIndicator size={18} color={globalStyles.darkBlue} /> :
                    <>
                    <View style={styles.imageContainer}>
                            <Image source={{ uri: image[1] }} style={styles.imageStyles}/>
                    </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoHeaderContainer}>
                    <AppText fontSize={23}>{item.name}</AppText>
                    <IconComponent name="heart-outlined" />
                </View>

                <Tabs
                    tabContainerStyle={styles.tabContainerStyle}
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                >
                    <Tab 
                        heading="Shop"
                        tabStyle={styles.tabstyles}
                        activeTabStyle={styles.active}
                        textStyle={styles.tabText}
                        activeTextStyle={styles.activeTextStyle}
                        >
                        <View style={styles.btnContainer}>
                            <AppText fontSize={16}>Select the quantity</AppText>

                            <View style={styles.actionBtns}>
                                <TouchableOpacity style={styles.reduceBtn} onPress={() => setCount(count-1)}>
                                    <AntDesign name='minus' size={20} color={globalStyles.white} />
                                </TouchableOpacity>
                                <TextInput 
                                    style={styles.quantity}
                                >
                                    <AppText textAlign='center' color={globalStyles.white}>{count < 0 ? 1 : count}</AppText>
                                </TextInput>
                                <TouchableOpacity style={styles.reduceBtn} onPress={() => setCount(count+1)}>
                                    <AntDesign name='plus' size={20} color={globalStyles.white} />
                                </TouchableOpacity>
                                <View style={styles.salesText}>
                                    <AppText color={globalStyles.white}>SALE</AppText>
                                </View>
                            </View>

                        </View>
                    </Tab>
                    <Tab 
                        heading="Details"
                        tabStyle={styles.tabstyles}
                        activeTabStyle={styles.active}
                        textStyle={styles.tabText}
                        activeTextStyle={styles.activeTextStyle}
                        >
                        <View>
                            <AppText fontSize={16}>{item.price}</AppText>
                        </View>
                    </Tab>
                    <Tab 
                        heading="Features"
                        tabStyle={styles.tabstyles}
                        activeTabStyle={styles.active}
                        textStyle={styles.tabText}
                        activeTextStyle={styles.activeTextStyle}
                        >
                        <View>
                                
                        </View>
                    </Tab>
                </Tabs>

                <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('CheckoutScreen', {image: image[1], item: item, qty: count})}>
                    <AppText color={globalStyles.white}>ADD TO CART</AppText>
                </TouchableOpacity>
            
            </View>
                    </>
            }
                </>
            }

        
            

        </ScrollView>
    )
}

export default ProductDetailsScreen

