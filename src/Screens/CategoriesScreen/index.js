/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'
import { AppText } from '../../Components'

import styles from './styles'

const CategoriesScreen = () => {
    return (
        <View style={styles.container}>
            <AppText {...styles.text}>Categories</AppText>
        </View> 
    )
}

export default CategoriesScreen

