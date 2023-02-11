import { StyleSheet, Platform } from 'react-native';
import Color from '@themes/colors';

const styles = StyleSheet.create({
    NavBarApp: {
        backgroundColor: Color.appColor,
        borderBottomWidth: 0,
    },
    NavBarWhite: {
        backgroundColor: Color.white,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    NavBarNoBorder: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
        elevation: 0,
    },
    NavBarTitle: {
        marginHorizontal: 8,
        fontFamily: 'Lato-Bold',
        color: Color.white,
        marginTop: Platform.OS === 'ios' ? 10 : 2.4,
        fontSize: 17,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
    },
    NavbarTitleBlack: {
        marginHorizontal: 8,
        fontFamily: 'Lato-Bold',
        color: 'black',
        marginTop: Platform.OS === 'ios' ? 10 : 2.4,
        fontSize: 17,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
    },
    NavBarTransparent: {},
    NavBarGreen: {
        backgroundColor: Color.greenLight,
    },
    NavBarGrey: {
        backgroundColor: Color.darkGrey,
    },
    NavBarOrangeNoShadow: {
        backgroundColor: Color.appColor,
        borderBottomWidth: 0,
        elevation: 0,
    },
    NavBarGreenNoShadow: {
        backgroundColor: Color.mightyGreen,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    NavBarBubble: {
        backgroundColor: Color.bubble,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
});

export default styles;
