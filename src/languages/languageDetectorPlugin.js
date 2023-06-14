import {LANGUAGES} from '../constants/consts';
import {getLanguage, setLanguage} from '../utils/languageUtils';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function () {
    try {
      const val = await getLanguage();
      //   return val != null ? val : LANGUAGES.ENGLISH.key;
      return val;
    } catch (e) {
      console.log('could not get language:', e);
    }
  },
  cacheUserLanguage: async function (language) {
    try {
      // dev is the default value of fallbackLang if no fallBack lang is specified
      if (language != 'dev') {
        await setLanguage(language);
        console.log('successfully changed lanuaguage to:', language);
      }
    } catch (e) {
      console.log('cannot set language: ', e);
    }
  },
};

export default languageDetectorPlugin;
