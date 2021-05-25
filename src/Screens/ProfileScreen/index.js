/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, View } from 'react-native'
import { ProfileCard } from '../../Components'
import AppText from '../../Components/AppText'

import styles from './styles'

const ProfileScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.avator}>

                </View>
                <AppText fontSize={20} marginBottom={12}>@JohnDoe</AppText>
            </View>

            <ProfileCard title="My Cart" onPress={() => navigation.navigate('Cart')} />

            <ProfileCard title="My Orders" />

            <ProfileCard title="Settings" />

            <ProfileCard title="Logout" />

        </ScrollView>
    )
}

export default ProfileScreen

