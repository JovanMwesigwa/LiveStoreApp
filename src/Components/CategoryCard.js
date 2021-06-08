/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const CategoryCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
            <View>
                <AppText>{item.name}</AppText>
                {
                    !item.count < 1 &&
                    <AppText {...styles.subText}>contains over {item.count} products</AppText>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        elevation: 1,
        backgroundColor: globalStyles.white,
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 35/2,
        marginRight: 8,
        backgroundColor: globalStyles.lightGrey
    },
    subText: {
        fontSize: 12,
        color: "grey"
    }
})

export default CategoryCard
