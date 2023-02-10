import React from 'react';
import { StatusBar, View } from 'react-native';
import { isIOS } from '@utils/platform.utils';
import Color from '@themes/colors';

export const setStatusBar = (color = Color.green) => {
    if (isIOS()) {
        return;
    }

    StatusBar.setBackgroundColor(color, true);
};

const AppStatusBar = ({ backgroundColor, ...props }) => (
    <View style={backgroundColor}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
);

export default AppStatusBar;
