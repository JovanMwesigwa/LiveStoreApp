/* eslint-disable prettier/prettier */
import React from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles.js'
import {AppText, CardInfoComponent, HeaderText, HotSalesComponent, IconCard, IconComponent, ProductCardComponent, SearchComponent} from '../../Components/index'
import globalStyles from '../../../config/GlobalStyles/styles.js';
import useFetchData from '../../api/useFetchCategories'

const iphone = require('../../../assets/iphone.png')

const Home = ({ navigation }) => {

    const [ pageNo, setPageNo ] = React.useState(1)

    const { loading, fetchDataAPI, data, error } =  useFetchData("products");

    React.useEffect(() => {
        fetchDataAPI()
    },[]);
    
    return (
        <View style={styles.container}> 
        {
            !error && 
                <>
                    {
                    loading ? 
                    <ActivityIndicator size={18} color={globalStyles.darkBlue} /> :
                        <FlatList
                            ListHeaderComponent={
                                <>
                                <View style={styles.headerContainer}>  
                                <View style={styles.icon} />
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                    <Entypo name='shopping-cart' size={25} color={globalStyles.darkBlue} />
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.categoryContainer}> 
                                <View style={styles.topContainer} >
                                    <HeaderText>All Categories</HeaderText> 
                                    <TouchableOpacity onPress={() => navigation.navigate('AppCategories')}>
                                        <AppText color={globalStyles.red}>View all</AppText>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.categories}>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        <IconCard selected name='Phones' icon='phone-portrait-outline' />
                                        <IconCard  name='Computer' icon="laptop-outline"  />
                                        <IconCard  name='Gifts' icon="ios-gift-outline" />
                                        <IconCard  name='Kitchen'  icon="fast-food-outline" />
                                        <IconCard  name='Kitchen' icon="fast-food-outline" />
                                    </ScrollView>
                                </View>
                
                            </View>
                
                            <View style={styles.searchContainer}>  
                                <SearchComponent home  navigate={() => navigation.navigate("Profile")}/>
                            </View>
                
                            <View style={styles.salesContainer}>  
                
                                <View style={styles.topContainer}>
                                    <HeaderText>Hot Sales</HeaderText> 
                                </View>
                
                                <View style={styles.hotSalesContainer}>
                                    <CardInfoComponent />
                                    <Image source={iphone} style={styles.imageStyles}/>
                                </View>
                
                            </View>
                
                            <View style={styles.feedContainer}>  
                
                                <View style={styles.topContainer}>
                                    <HeaderText>Best Sellers</HeaderText> 
                                    <AppText color={globalStyles.red}>See more</AppText>
                                </View>
                            </View>
                            </>
                            }
                            data={data}
                            renderItem={({ item }) => (
                                    <ProductCardComponent
                                        item={item}
                                        loading={loading}
                                        error={error}
                                    />
                            )}
                            numColumns={2}
                            keyExtractor ={(item) => item.id.toString()}
                        />
                }
                </>
        }
        </View>
    )
}

export default Home
