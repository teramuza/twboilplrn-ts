import ENV from 'react-native-config';
import APP from '../../app.json';
import { isAndroid } from '@utils/platform.utils';
import { buildNumber, version } from '@utils/version.utils';

export const APP_INFO = {};
export const CONFIG = {};
export const SECURITY = {};

/**
 * --- APP INFO ---
 * You can declare static constant about information of your app
 */
APP_INFO.APP_NAME = APP.displayName;
APP_INFO.PACKAGE_NAME = 'com.' + APP.name;
APP_INFO.VERSION = version;
APP_INFO.BUILD_NUMBER = buildNumber;
APP_INFO.APP_URL = isAndroid()
    ? `https://play.google.com/store/apps/details?id=${APP_INFO.PACKAGE_NAME}`
    : 'https://itunes.apple.com/';

/**
 * --- APP CONFIG ---
 * You can declare static constant about your config
 */
CONFIG.API_URL = ENV.API_URL;
CONFIG.TIME_OUT = ENV.TIME_OUT;
CONFIG.BUILD_TYPE = ENV.ENV;
/**
 * --- SECURITY ---
 * You can declare static constant about security of your app
 */
SECURITY.ENCRYPTION_KEY = ENV.ENCRYPTION_KEY;
