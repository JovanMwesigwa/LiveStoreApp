/* eslint-disable prettier/prettier */
import React from 'react'
import { ActivityIndicator, View, Keyboard, FlatList } from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles'
import useSearchData from '../../api/useSearchData'
import { ProductCardComponent, ProfileCard, SearchComponent } from '../../Components'
import AppText from '../../Components/AppText'

import styles from './styles'

const ProfileScreen = ({ navigation }) => {

    const [ text, setText ] = React.useState("");

    const { loading, fetchDataAPI, data, error } =  useSearchData("products/", text);

    const submit = () => {
        Keyboard.dismiss()

        fetchDataAPI()

        setText("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText fontSize={20} fontWeight="700">Search for any product</AppText>
                <AppText fontSize={18}>Your choice!</AppText>
            </View>
            <View style={styles.searchContainer}>  
                <SearchComponent text={text} setText={setText} onPress={submit} />
            </View>

            {
                loading ? <ActivityIndicator size={13} color={globalStyles.red} /> :
                <FlatList 
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

        </View>
    )
}

export default ProfileScreen

