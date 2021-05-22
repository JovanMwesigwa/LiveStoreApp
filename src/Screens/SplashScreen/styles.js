/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import globalStyles from '../../../config/GlobalStyles/styles'

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#83781B',
        borderRadius: 5,
        padding: 14,
        paddingHorizontal: 30,
        marginVertical: 25,
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
    },
    imageStyles: {
        // flex: 1,
        // resizeMode: 'contain'
    },
    infoContainer: {
        alignItems: 'center',
        backgroundColor: globalStyles.red,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex: 1,
        padding: 25
    },
    liveText: {
        fontSize: 35,
        fontWeight: '700',
        color: '#83781B'
    },
    headerText: {
        fontSize: 35,
        fontWeight: '700',
        color: '#C7BBBB',
        marginBottom: 15
    }
})

export default styles;