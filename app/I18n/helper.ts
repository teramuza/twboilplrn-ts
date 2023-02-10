import I18n from 'i18next';
import Constant from '@constants';
import t from '@screens/strings';
import {SCENE_NAME} from '@lang/nskey';
import { UserDataActionCreator } from '@states/userData.reducer';
import { useDispatch } from 'react-redux';
import { loadString, save } from '@storage/fastStorage';
import LocalStorageKeys from '@storage/key';
const { LOCALE } = Constant;

const dispatch = useDispatch();

const changeLanguage = async (lang) => {
    await I18n.changeLanguage(lang, (err) => {
        if (!err) return I18n.changeLanguage(lang);
    });
};


const setDefaultLanguage = async () => {
    const lang = loadString(LocalStorageKeys.LANGUAGE) ?? LOCALE.ID;
    return Promise.all([
        setLanguage(lang),
        changeLanguage(lang)
    ]);
};

const setLanguage = (lang) => dispatch(UserDataActionCreator.setLang(lang));

const setToLocalStorage = (lang) => save(LocalStorageKeys.LANGUAGE, lang);
/**
 *
 * @param {string} lang
 * @return {Promise<void>}
 */
const setAppLanguage = (lang) => {
    return Promise.all([
        changeLanguage(lang),
        setLanguage(lang),
        setToLocalStorage(lang),
    ]);
};

function getTranslatedTitle(sceneKey) {
    const title = t(sceneKey);
    if (title !== `${SCENE_NAME}.${sceneKey}`) {
        return title;
    }
}

export {
    setDefaultLanguage,
    setAppLanguage,
    getTranslatedTitle
};
