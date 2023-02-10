import Constant from '@constants';
import { setTranslationBundle, useTranslate } from '@lang';
import { SCENE_NAME } from '@lang/nskey';
import idID from './id';
import enEN from './en';

setTranslationBundle(
    SCENE_NAME,
    {
        lang: Constant.LOCALE.ID,
        bundle: idID,
    },
    {
        lang: Constant.LOCALE.EN,
        bundle: enEN,
    },
);

export default useTranslate(SCENE_NAME);
