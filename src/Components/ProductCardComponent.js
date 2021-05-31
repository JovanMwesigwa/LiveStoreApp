/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const phone = require('../../assets/phone.png')

const ProductCardComponent = ({ onPress, item }) => {
    var imageRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
    let image = item.yoast_head.match(imageRegex)
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: !image[1] ? image[2] : image[1] }} style={styles.imageStyles} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <AppText color={globalStyles.red}>UGX {item.price}</AppText>
                        <AppText color={globalStyles.lightGrey} fontSize={12}>Sold by {item.store.name}</AppText>
                        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 8,
        justifyContent: 'center',
    },
    name: {
        color: globalStyles.darkBlue,
        fontSize: 13,
    },
    right: {
        borderRadius: 8,
        elevation: 2,
        flex: 1,
        backgroundColor: globalStyles.white,
        padding: 15
    },
    imageContainer: {
        height: 120,
        width: 120,
    },
    imageStyles: {
        backgroundColor: globalStyles.lighterGrey,
        height: "100%",
        width: '100%',
        resizeMode: 'contain',
    },
    left: {
        borderRadius: 8,
        marginRight: 8,
        elevation: 2,
        flex: 1,
        backgroundColor: globalStyles.white,
        padding: 15
    }
})

export default ProductCardComponent
