/* eslint-disable no-restricted-syntax */
/**
 * Base Component React Native App
 *
 * @author
 * tera - https://github.com/teukuraja
 * facebook - https://github.com/facebook/react-native
 *
 * https://github.com/teukuraja/twboilplrn-ts
 *
 * @format
 * @flow strict-local
 *
 * WARNING!!!
 * 1) DO NOT EDIT THIS FILE UNLESS YOU NEED ADDITIONAL CONFIGURATION OF THIS PROJECT
 * 2) DO NOT RENAME OR MOVE THIS FILE
 * 3) READ THE README FILE TO USE THIS TEMPLATE
 */

import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { I18nextProvider } from 'react-i18next';
import AppStatusBar from '@components/base/AppStatusBar';
import { getPersistor, getStore } from '@redux/store';
import RootNavigation from '@router';
import I18n from '@lang';
import { PersistGate } from 'redux-persist/integration/react';
import Colors from '@themes/colors';
import { i18n } from 'i18next';

// @ts-ignore
const i18nProvider: i18n = I18n;

const store = getStore();
const persistor = getPersistor();

const COLOR_THEME = Colors.appColor;

const Style = (flex: number) => ({ flex: flex, backgroundColor: COLOR_THEME });

const BaseApp: () => React.ReactElement = () => (
    <I18nextProvider i18n={i18nProvider}>
        <SafeAreaView style={Style(0)} />
        <SafeAreaView style={Style(1)}>
            <AppStatusBar backgroundColor={COLOR_THEME} barStyle="light-content" />
            <StoreProvider store={store}>
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    <PaperProvider>
                        <RootNavigation />
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        </SafeAreaView>
    </I18nextProvider>
);

export default BaseApp;