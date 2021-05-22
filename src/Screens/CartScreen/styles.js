/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import globalStyles from '../../../config/GlobalStyles/styles';


const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center'
    },
    cartInfo: {
        backgroundColor: globalStyles.darkBlue,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 25,
        flex: 2,
        padding: 18,
        paddingTop: 45
    },
    cartPriceInfo: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        paddingVertical: 25,
        marginVertical: 25,
    },
    container: {
        flex: 1,
    },
    header: {
        padding: 15,
        marginVertical: 15,
    },
    textInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },  
    text: {
        fontSize: 28,
        fontWeight: '600',
        paddingHorizontal: 15,
        marginVertical: 15
    }
});

export default styles;