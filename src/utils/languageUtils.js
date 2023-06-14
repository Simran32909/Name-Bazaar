import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_VALUE = 'current_lang';

const setLanguage = async language => {
  try {
    await AsyncStorage.setItem(KEY_VALUE, language);
  } catch (e) {
    console.log('cannot set language', e);
  }
};

const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem(KEY_VALUE);
    // if (language !== null) {
    //   return true;
    // }
    // return false;
    return language;
  } catch (e) {
    console.error('cannot get language', e);
  }
};

export {getLanguage, setLanguage};
