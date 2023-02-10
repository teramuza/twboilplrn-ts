import { MMKV } from 'react-native-mmkv';
import ENV from 'react-native-config';
import { errorLogger, printData } from '@utils/logging.utils';

export const fastStorage = new MMKV();
const encryptionKey = ENV.MMKV_ENCRYPTION_KEY;

export const save = (
    key: string,
    value: string | number | boolean | Uint8Array,
) => {
    try {
        fastStorage.set(key, value);
    } catch (e) {
        printData(e);
        errorLogger(e);
    }
};

export const saveMultiple = (key: string, value: any) => {
    try {
        fastStorage.set(key, JSON.stringify(value));
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};

export const saveWithEncryption = (
    key: string,
    id: string,
    value: string | number | boolean | Uint8Array,
) => {
    try {
        const fastStorageSecure = new MMKV({ id: `user-${id}`, encryptionKey });
        fastStorageSecure.set(key, value);
    } catch (e) {
        printData(e);
    }
};

export const loadNumber = (key: string) => {
    try {
        const result = fastStorage.getNumber(key);
        if (result) {
            return result;
        }
        return null;
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};

export const loadBoolean = (key: string) => {
    try {
        const result = fastStorage.getBoolean(key);
        if (result) {
            return result;
        }
        return false;
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};

export const loadString = (key: string) => {
    try {
        const result = fastStorage.getString(key);
        if (result) {
            return result;
        }
        return null;
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};

export const loadBuffer = (key: string) => {
    try {
        return fastStorage.getBuffer(key);
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};

export const loadStringWithEncryption = (key: string, id: string) => {
    try {
        const fastStorageSecure = new MMKV({ id: `user-${id}`, encryptionKey });
        const result = fastStorageSecure.getString(key);
        if (result) {
            return result;
        }
        return null;
    } catch (e) {
        printData(e);
    }
};

export const remove = (key: string) => {
    try {
        return fastStorage.delete(key);
    } catch (e) {
        printData(e);
        console.error('Error:', e);
    }
};
