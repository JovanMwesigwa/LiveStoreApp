/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../config/GlobalStyles/styles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.lighterGrey,
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        paddingHorizontal: 15,
        marginVertical: 15
    }
})

export default styles;