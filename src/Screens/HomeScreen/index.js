/* eslint-disable prettier/prettier */
import React from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
                    <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.headerContainer}>  
                                <View style={styles.icon} />
                                <View >
                                    <FontAwesome name="shopping-bag"size={25} color={globalStyles.darkBlue} />
                                </View>
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
                                        <IconCard  name='Kitchen'  icon="restaurant" />
                                        <IconCard  name='Office' icon="ios-easel-outline" />
                                        <IconCard  name='Gifts' icon="ios-gift-outline" />
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
                            <View style={{ paddingVertical: 12 }}>
                                <ActivityIndicator size={18} color={globalStyles.darkBlue} /> 
                            </View>
                            </ScrollView> :
                        <FlatList
                            ListHeaderComponent={
                                <>
                                <View style={styles.headerContainer}>  
                                <View style={styles.icon} />
                                <View >
                                    <FontAwesome name="shopping-bag"size={25} color={globalStyles.darkBlue} />
                                </View>
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
                                        <IconCard  name='Kitchen'  icon="restaurant" />
                                        <IconCard  name='Office' icon="ios-easel-outline" />
                                        <IconCard  name='Gifts' icon="ios-gift-outline" />
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
                                    <AppText color={globalStyles.red}>Top</AppText>
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
