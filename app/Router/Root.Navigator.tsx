/* eslint-disable react/display-name */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Main.stack';

export default () => (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
);
