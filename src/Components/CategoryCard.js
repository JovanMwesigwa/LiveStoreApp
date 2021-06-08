/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const CategoryCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.middleContainer}>
                <View>
                    <AppText color={globalStyles.black}>{item.name}</AppText>
                    {
                        !item.count < 1 &&
                        <AppText {...styles.subText}>contains over {item.count} products</AppText>
                    }
                </View>
                <MaterialIcons name="play-arrow" size={12} color={globalStyles.black} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 18,
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 35/2,
        marginRight: 8,
        backgroundColor: globalStyles.lightGrey
    },
    middleContainer: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subText: {
        fontSize: 12,
        color: "grey"
    }
})

export default CategoryCard
