/* eslint-disable */
import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment/min/moment-with-locales';
import Constant from '@constants';

const { LOCALE } = Constant;

const enDictionary = require('./strings/en-EN.json');
const idDictionary = require('./strings/id-ID.json');

const Translation = {
    en: {
        translation: enDictionary,
    },
    id: {
        translation: idDictionary,
    },
};

I18n.use(initReactI18next);

I18n.init({
    compatibilityJSON: 'v3',
    resources: Translation,
    fallbackLng: [LOCALE.EN, LOCALE.ID],
    lng: LOCALE.ID,
});

I18n.on('languageChanged', function (lng) {
    let locale = 'id';

    if (lng) {
        const isEnglishLanguage = lng === LOCALE.EN;
        if (isEnglishLanguage) {
            locale = 'en';
        }
    }

    moment.locale(locale);
});

/**
 * setTranslationBundle()
 * @param namespace {string}
 * @param resources {{lang: 'en-EN'|'id-ID', bundle: object}}
 */
export const setTranslationBundle = (namespace, ...resources) => {
    for (const res of resources) {
        const resource = {
            [namespace]: res.bundle,
        };
        I18n.addResourceBundle(res.lang, 'translation', resource);
    }
};

/**
 * useTranslate()
 * @param namespace {string}
 * @returns {(key: (string|string[]), option?: import('i18next').TOptions & {common? })};
 */
export const useTranslate = (namespace) => (key, options) => {
    if (options?.common) {
        return I18n.t(key, options);
    }
    return I18n.t(`${namespace}.${key}`, options);
};

/**
 *
 * @param key {string}
 * @param options {TOptions}
 * @returns {string}
 */
export const lang = (key, options) => I18n.t(key, options);

export default str => I18n.t(str);
