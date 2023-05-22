import AsyncStorage from '@react-native-async-storage/async-storage';

const setLanguage = async language => {
  try {
    await AsyncStorage.setItem('lang', language);
  } catch (e) {
    console.log('cannot set language', e);
  }
};

const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem('lang');
    if (language !== null) {
      return true;
    }
    return false;
  } catch (e) {
    console.log('cannot get language', e);
  }
};

export {getLanguage, setLanguage};
