/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles'

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        paddingHorizontal: 15,
        marginBottom: 18
    },
    categories: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 130,
        paddingLeft: 10
    },
    cardInfo: {
        height: '100%',
        width: '45%'
    },
    container: {
        backgroundColor: globalStyles.lighterGrey,
        flex: 1,
        paddingTop: 18,
    },
    headerContainer: {
        alignItems: 'center',
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
    },
    hotSalesContainer: {
        backgroundColor: 'grey',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        height: 180,
        overflow: 'hidden',
    },
    imageStyles: {
        flex: 1,

    },
    topContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    productContainer: {
        margin: 10,
    },
    icon: {
        // backgroundColor: globalStyles.darkBlue,
        height: 35,
        width: 35,
    },
    salesContainer: {
        paddingHorizontal: 15,
        flex: 1,
        width: Dimensions.get('window').width
    },
    searchContainer: {
        height: 80,
    },
    feedContainer: {
        flex: 1,
        paddingHorizontal: 15,
        marginVertical: 15
    }
})

export default styles