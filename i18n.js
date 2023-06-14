import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './src/languages/en.json';
import hindi from './src/languages/hindi.json';
import {LANGUAGES} from './src/constants/consts';
import languageDetectorPlugin from './src/languages/languageDetectorPlugin';

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    // fallbackLng: LANGUAGES.HINDI.key,
    debug: false,
    resources: {
      [LANGUAGES.ENGLISH.key]: {
        translation: english,
      },
      [LANGUAGES.HINDI.key]: {
        translation: hindi,
      },
    },
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
