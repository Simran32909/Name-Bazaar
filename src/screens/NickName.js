import {StyleSheet, View, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/common/CustomButton';
import {useState} from 'react';
import _ from 'lodash';
import CustomText from '../components/common/CustomText';

const NickName = () => {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  const [searchString, setSearchString] = useState('');
  const [result, setResult] = useState(null);
  const [errorTextInput, setError] = useState('');

  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  const {data, loading, error, netState} = useFirebaseData('nick name');

  const handlePress = () => {
    if (searchString.trim() == '') {
      setError('Please enter something');
      return;
    }
    const combinedData = {...data['english'], ...data['hindi']};
    const names = Object.keys(combinedData).sort();
    const index = _.sortedIndexOf(names, searchString.trim());
    let resultString = '';
    setError('');
    if (index == -1) {
      if (language == 'english') resultString = 'No Nick Name Found';
      else resultString = 'कोई निक नाम नहीं मिला';
    } else {
      if (language == 'english')
        resultString = `For ${searchString} nick name is: ${
          combinedData[searchString.trim()]
        }`;
      else
        resultString = `${searchString} के लिए निक नाम: ${
          combinedData[searchString.trim()]
        } है|`;
    }
    setResult(resultString);
  };

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <View style={{width: '100%'}}>
          <TextInput
            style={styles.searchBox}
            onChangeText={val => setSearchString(val)}
            value={searchString}
            placeholder={t('Enter Name')}
            placeholderTextColor="#dfe0e8"
          />
          {errorTextInput && (
            <CustomText text={t(errorTextInput) + '...'} fontColor="#d14753" />
          )}
        </View>
        <CustomButton
          text={t('Find Nick Name')}
          btnColor={'white'}
          textColor={'black'}
          textSize={20}
          fontWeight={'bold'}
          handlePress={handlePress}
        />
        {result && (
          <View
            style={{
              borderColor: 'white',
              borderWidth: 5,
              padding: 10,
              marginTop: 20,
            }}>
            <CustomText text={result} size={30} fontColor={'white'} />
          </View>
        )}
      </SafeAreaView>
    </ErrorWrapper>
  );
};

export default NickName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    // gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  searchBox: {
    color: 'white',
    // padding: 0,
    // backgroundColor:'white',
    alignSelf: 'center',
    margin: 0,
    fontSize: 30,
    paddingVertical: 5,
    paddingHorizontal: 12,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});
