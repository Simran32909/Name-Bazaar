import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useState, useEffect, useRef} from 'react';
import Details from '../components/Details';
import useFirebaseData from '../hooks/useFirebaseData';
import ErrorWrapper from '../components/ErrorWrapper';
import {LANGUAGES} from '../constants/consts';

const RakshiCalculationScreen = () => {
  const {t, i18n} = useTranslation();
  const [inputString, setInputString] = useState({
    name: '',
    zodiac: '',
    nakshatra: '',
    horoscope: {english: [], hindi: []},
  });
  const {data, loading, error, netState} = useFirebaseData('rashi_nakshatras');
  const allRashi = useRef([]);
  const allNakstras = useRef([]);

  const curLanguage =
    i18n.language == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  function sortAccToLength(a, b) {
    // Return -1 if a should come before b
    // Return 0 if a and b are considered equal in order
    // Return 1 if b should come before a
    if (a.length > b.length) return -1;
    else if (a.length == b.length) return 0;
    else return 1;
  }

  useEffect(() => {
    // console.log('data changed', data.horoscope);
    if (data.length != 0) {
      allRashi.current = Object.values(data.rashi)
        .map(val => val.map(alpha => alpha.trim().toLowerCase()))
        .flat()
        .sort(sortAccToLength);
      allNakstras.current = Object.values(data.nakshatras)
        .map(val => val.map(alpha => alpha.trim().toLowerCase()))
        .flat()
        .sort(sortAccToLength);
    }
  }, [data]);

  const findNakshatras = input => {
    let matchedChar = '';
    for (const alpha of allNakstras.current) {
      if (alpha === input.substring(0, alpha.length)) {
        matchedChar = alpha;
        break;
      }
    }
    let nakshatra = Object.keys(data.nakshatras).filter(val =>
      data.nakshatras[val].includes(matchedChar),
    );
    return nakshatra;
  };

  const findRashi = input => {
    let matchedChar = '';
    for (const alpha of allRashi.current) {
      if (alpha === input.substring(0, alpha.length)) {
        matchedChar = alpha;
        break;
      }
    }
    let rashi = Object.keys(data.rashi).filter(val =>
      data.rashi[val].includes(matchedChar),
    );
    return rashi;
  };

  const handleChange = input => {
    if (input.trim() == '') {
      setInputString({
        name: '',
        zodiac: '',
        nakshatra: '',
        horoscope: {english: [], hindi: []},
      });
      return;
    }
    const rashi = findRashi(input.trim().toLowerCase());
    const nakshatra = findNakshatras(input.trim().toLowerCase());
    const horoscope = rashi.length
      ? data.horoscope[rashi[0]]
      : {english: [], hindi: []};
    setInputString({
      name: input,
      zodiac:
        rashi.length == 0 ? 'Cannot get your zodiac' : rashi[0].toLowerCase(),
      nakshatra:
        nakshatra.length == 0
          ? 'Cannot get your nakshatra'
          : nakshatra[0].toLowerCase(),
      horoscope: horoscope,
    });
  };

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.searchBox}
          value={inputString.name}
          onChangeText={handleChange}
          placeholder={t('Enter Name')}
          placeholderTextColor="#dfe0e8"
        />
        <Details
          label={t('Zodiac')}
          data={t(inputString.zodiac)}
          customStyle={{marginHorizontal: 20}}
        />
        <Details
          label={t('Nakshatra')}
          data={t(inputString.nakshatra)}
          customStyle={{marginHorizontal: 20}}
        />
        <Details
          label={t('Horoscope')}
          data={inputString.horoscope[curLanguage]}
          customStyle={{marginHorizontal: 20}}
          isDataArray={true}
        />
      </SafeAreaView>
    </ErrorWrapper>
  );
};

export default RakshiCalculationScreen;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    // paddingLeft: 20,
    flex: 1,
    backgroundColor: '#2196F3',
    gap: 50,
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
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  listStyle: {
    width: '100%',
  },
});
