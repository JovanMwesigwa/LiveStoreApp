/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'


import { AppText, CategoryCard } from '../../Components'
import globalStyles from '../../../config/GlobalStyles/styles';
import styles from './styles'
import useFetchData from '../../api/useFetchCategories'

const CategoriesScreen = () => {

    const [ pageNum, setPageNum ] = React.useState(1)

    const { loading, data, fetchDataAPI, error } = useFetchData("products/categories");

      useEffect(() => {
        fetchDataAPI()
      },[])

    return (
        <View style={styles.container}>
            <AppText {...styles.text}>Categories</AppText>
            {
                !error &&
                <>
                    {
                        loading ? 
                        <View>
                            <ActivityIndicator size={16} color={globalStyles.darkBlue} />
                        </View> :

                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={({ item }) => (
                               <CategoryCard item={item} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    }
                </>
            }
        </View> 
    )
}

export default CategoriesScreen

