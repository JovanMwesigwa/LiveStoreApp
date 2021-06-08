/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles';


const styles = StyleSheet.create({
    avator: {
        backgroundColor: globalStyles.lightGrey,
        borderRadius: 100/2,
        height: 100,
        marginVertical: 12,
        width: 100,
    }, 
    searchContainer: {
        height: 80,
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    } ,
    container: {
        flex: 1,
        backgroundColor: globalStyles.lighterGrey,
    },
    userContainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
        borderBottomWidth: 0.5,
        borderBottomColor: globalStyles.lightGrey,
        marginVertical: 18
    },

})

export default styles;