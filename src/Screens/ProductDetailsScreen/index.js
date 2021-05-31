/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import {Tab, Tabs } from 'native-base';
import {AppText, IconComponent} from '../../Components/'

import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles.js';
import globalStyles from '../../../config/GlobalStyles/styles';


const ProductDetailsScreen = ({navigation, route}) => {
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
                                <View style={styles.reduceBtn}>
                                    <AntDesign name='minus' size={20} color={globalStyles.white} />
                                </View>
                                <TextInput 
                                    style={styles.quantity}
                                >
                                    <AppText textAlign='center' color={globalStyles.white}>1</AppText>
                                </TextInput>
                                <View style={styles.reduceBtn}>
                                    <AntDesign name='plus' size={20} color={globalStyles.white} />
                                </View>
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

                <View style={styles.cartBtn}>
                    <AppText color={globalStyles.white}>ADD TO CART</AppText>
                </View>
            
            </View>
                    </>
            }
                </>
            }

        
            

        </ScrollView>
    )
}

export default ProductDetailsScreen

