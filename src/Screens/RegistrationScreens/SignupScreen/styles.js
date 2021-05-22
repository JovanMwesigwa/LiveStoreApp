/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../../config/GlobalStyles/styles';


const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        borderRadius: 5,
        width: '100%',
        padding: 8,
        paddingHorizontal: 30,
        marginVertical: 35,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: globalStyles.lighterGrey,
    },
    inputStyles: {
        backgroundColor: globalStyles.lighterGrey,
        width: "100%",
        marginVertical: 12,
        elevation: 0,
    }
})

export default styles;