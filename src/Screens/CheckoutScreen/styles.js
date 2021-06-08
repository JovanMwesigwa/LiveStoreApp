/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions} from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles'


const styles = StyleSheet.create({
    btnStyles: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        padding: 12,
        marginVertical: 12,
        borderRadius: 5,
    },
    container: {
        backgroundColor: globalStyles.lighterGrey,
        flex: 1,
    },
    text: {
        fontSize: 15,
        color: globalStyles.black
    },
    imageStyles: {
        height: 100,
        width: 100,
    },
    line: {
        height: "100%",
        width: 1,
        backgroundColor: globalStyles.lightGrey,
        marginHorizontal: 5,
    },
    sellerText: {
        fontSize: 14,
        color: "grey"
    },
    subTotalPriceText: {
        fontSize: 14,
        color: globalStyles.lightGrey
    },
    totalPriceText: {
        fontSize: 14,
        color: globalStyles.black,
        fontWeight: '700'
    },
    paymentsCard: {
        padding: 12,
        backgroundColor: "#46B2E0"
    },
    logoContainer: {
        alignItems: 'center',
        backgroundColor: globalStyles.white,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-evenly',
        marginVertical: 8,
        borderRadius: 4,
    },
    actionText: {
        fontSize: 15,
    },
    logoStyles: {
        height: 65,
        width: 64,
        resizeMode: 'contain'
    },
    paymentsTitle: {
        fontSize: 15,
        color: globalStyles.white,
        
    },
    subHeader: {
        color: globalStyles.black,
        fontSize: 15,
        fontWeight: '700'
    },
    inputStyles: {
        padding: 5,
        backgroundColor: "#CAD5E2",
        borderRadius: 5,
        marginVertical: 8
    },
    submitCard: {
        backgroundColor: globalStyles.white,
        elevation: 2,
        padding: 12,
        marginTop: 12
    },
    infoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        fontSize: 15,
        color: 'green',
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
    },
    totalCard: {
        elevation: 1,
        backgroundColor: globalStyles.white,
        marginVertical: 10,
        padding: 12,
    },
    itemCard: {
        elevation: 1,
        padding: 12,
        flexDirection: 'row',
        backgroundColor: globalStyles.white
    },
    productInfoCard: {
        flex: 2,
        paddingHorizontal: 8,
        paddingLeft: 18,
    },
    pricesInfoCard: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        padding: 18,
    },
    qtyStyles: {
        fontSize: 15,
        color: "grey"
    }
})

export default styles