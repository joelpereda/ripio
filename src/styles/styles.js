
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //GENERAL STYLES
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    rowContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'ProductSans-Bold',
        color: '#0187d0'
    },
    icon: {
        textAlign: 'center'
    },

    //HOME STYLES
    balanceContainer: {
        flex: 1
    },
    balanceTextTitle: {
        fontFamily: 'ProductSans-Bold',
        fontSize: 16,
        color: '#000'
    },
    balanceTextValue: {
        fontFamily: 'ProductSans-Medium',
        fontSize: 22,
        color: '#000'

    }
})

export { styles };