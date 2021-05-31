/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions} from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles'


const styles = StyleSheet.create({
    active: {
        backgroundColor: globalStyles.white,
    },
    btnContainer: {
        marginVertical: 20,
        paddingVertical: 20
    },
    actionBtns: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    cartBtn: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        borderRadius: 8,
        padding: 18,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: globalStyles.lighterGrey,
        flex: 1,
    },
    imageContainer: {
        borderRadius: 8,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    imageStyles: {
        borderRadius: 8,
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    infoContainer: {
        flex: 1,
        backgroundColor: globalStyles.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 3,
        padding: 20,
    },
    tabstyles: {
        backgroundColor: globalStyles.white,
    },
    tabContainerStyle: {
        height: 45,
        width: '100%',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        marginTop: 15
    },
    tabBarUnderlineStyle: {
        borderBottomWidth: 3,
        borderBottomColor: globalStyles.red
    },
    activeTextStyle: {
        color: globalStyles.red,
        fontSize: 17.5,
        fontWeight:'700'
    },
    reduceBtn: {
        alignItems: 'center',
        backgroundColor: globalStyles.darkBlue,
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        width: 40,
    },
    tabText: {
        color: 'grey',
        fontSize: 17.5,
        fontWeight:'700'
    },
    infoHeaderContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantity: {
        alignItems: 'center',
        backgroundColor: globalStyles.lightGrey,
        borderRadius: 5,
        marginHorizontal: 8,
        justifyContent: 'center',
        flex: 1,
    },
    salesText: {
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 8,
        flex: 1,
        backgroundColor: globalStyles.red,
        padding: 10,
    },
    headerContainer: {
        alignItems: 'center',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        padding: 18,
    }
})

export default styles