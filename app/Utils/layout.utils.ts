// packages
import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

import Constants from '@constants';
import { isIphoneX } from '@utils/platform.utils';

const {
    GUIDELINE: { WIDTH, HEIGHT },
} = Constants;

// Retrieve initial screen's width
const screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
const screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: string): number => {
    // Parse string percentage input and convert it to number.
    const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: string): number => {
    // Parse string percentage input and convert it to number.
    const elemHeight =
    typeof heightPercent === 'number'
        ? heightPercent
        : parseFloat(heightPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const getHorizontalPercentage = (horizontalDp) =>
    `${(horizontalDp * 100) / WIDTH}%`;
const getVerticalPercentage = (verticalDp) => `${(verticalDp * 100) / HEIGHT}%`;

const { height, width } = Dimensions.get('window');
const standardLength = width > height ? width : height;

const deviceHeight = isIphoneX()
    ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === 'android'
        ? standardLength - StatusBar.currentHeight
        : standardLength;

const responsiveFontPercentage = (percent) => {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
};

// guideline height for standard 5" device screen is 680
// our guideline from zeplin height is 640
const responsiveFontValue = (fontSize, standardScreenHeight = 640) => {
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    return Math.round(heightPercent);
};

const responsiveWidth = (dp) => widthPercentageToDP(getHorizontalPercentage(dp));
const responsiveHeight = (dp) => heightPercentageToDP(getVerticalPercentage(dp));
const responsiveBorderRadius = (dp) =>
    (responsiveWidth(dp) + responsiveHeight(dp)) / 2;

export {
    widthPercentageToDP,
    heightPercentageToDP,
    getHorizontalPercentage,
    getVerticalPercentage,
    responsiveFontPercentage,
    responsiveFontValue,
    responsiveWidth,
    responsiveHeight,
    responsiveBorderRadius,
};
