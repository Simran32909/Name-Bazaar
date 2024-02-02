import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomText from '../components/common/CustomText';
import {LANGUAGES} from '../constants/consts';
import {useState, useEffect} from 'react';
import Details from '../components/Details';

const RakshiCalculationScreen = () => {
  const {t, i18n} = useTranslation();
  const [data, setData] = useState({
    name: '',
    zodiac: '',
    nakshatra: '',
  });
  // const curLanguage = i18n.language;

  const getNakstraString = val => {
    return val
      .split(',')
      .map(val => t(val.trim()))
      .join(', ');
  };

  const calcNakstra = rashi => {
    let nakshatra = '';
    if (rashi === 'Aries') {
      nakshatra = 'अश्विनी, भरणी, कृत्तिका';
    } else if (rashi === 'Taurus') {
      nakshatra = 'कृत्तिका, रोहिणी, मृगशिरा';
    } else if (rashi === 'Gemini') {
      nakshatra = 'मृगशिरा, आर्द्रा, पुनर्वसु';
    } else if (rashi === 'Cancer') {
      nakshatra = 'पुनर्वसु, पुष्य, आश्लेषा';
    } else if (rashi === 'Leo') {
      nakshatra = 'मघा, पूर्वाफाल्गुनी, उत्तराफाल्गुनी';
    } else if (rashi === 'Virgo') {
      nakshatra = 'उत्तराफाल्गुनी, हस्त, चित्रा';
    } else if (rashi === 'Libra') {
      nakshatra = 'चित्रा, स्वाति, विशाखा';
    } else if (rashi === 'Scorpio') {
      nakshatra = 'विशाखा, अनुराधा, ज्येष्ठा';
    } else if (rashi === 'Sagittarius') {
      nakshatra = 'मूल, पूर्वाषाढ़ा, उत्तराषाढ़ा';
    } else if (rashi === 'Capricorn') {
      nakshatra = 'उत्तराषाढ़ा, श्रवण, धनिष्ठा';
    } else if (rashi === 'Aquarius') {
      nakshatra = 'धनिष्ठा, शतभिषा, पूर्वाभाद्रपद';
    } else if (rashi === 'Pisces') {
      nakshatra = 'पूर्वाभाद्रपद, उत्तराभाद्रपद, रेवती';
    }
    return nakshatra;
  };

  const findRashi = nameVal => {
    const lowercaseName = nameVal.toLowerCase().trim();
    const firstThreeLetters = lowercaseName.substring(0, 3);
    const firstTwoLetters = lowercaseName.substring(0, 2);
    const firstChar = lowercaseName.charAt(0);
    let rashi = '';

    if (['gha', 'cha'].includes(firstThreeLetters)) rashi = 'Gemini';
    else if (['tha', 'jha'].includes(firstThreeLetters)) rashi = 'Pisces';
    else if (['चा', 'ची'].includes(firstTwoLetters)) rashi = 'Pisces';
    else if (
      ['hi', 'hu', 'he', 'ho', 'ही', 'हू', 'हे', 'हो'].includes(firstTwoLetters)
    )
      rashi = 'Cancer';
    else if (['dh', 'sh', 'th'].includes(firstTwoLetters)) rashi = 'Virgo';
    else if (['to', 'तो'].includes(firstTwoLetters)) rashi = 'Scorpio';
    else if (['dh', 'ph', 'ये', 'यो'].includes(firstTwoLetters))
      rashi = 'Sagittarius';
    else if (['bh', 'kh', 'भो'].includes(firstTwoLetters)) rashi = 'Capricorn';
    else if (
      ['gu', 'ge', 'go', 'da', 'गू', 'गे', 'गो', 'दा'].includes(firstTwoLetters)
    )
      rashi = 'Aquarius';
    else if (['a', 'c', 'l', 'अ', 'आ', 'च', 'ल'].includes(firstChar))
      rashi = 'Aries';
    else if (
      [
        'e',
        'i',
        'o',
        'u',
        'v',
        'w',
        'इ',
        'ई',
        'उ',
        'ऊ',
        'ए',
        'ऐ',
        'ओ',
        'औ',
        'व',
      ].includes(firstChar)
    )
      rashi = 'Taurus';
    else if (['h', 'k', 'q', 'क', 'घ', 'ङ', 'छ', 'ह'].includes(firstChar))
      rashi = 'Gemini';
    else if (['d', 'ड'].includes(firstChar)) rashi = 'Cancer';
    else if (['m', 't', 'म', 'ट'].includes(firstChar)) rashi = 'Leo';
    else if (['p', 'ढ', 'प', 'ष', 'ण', 'ठ'].includes(firstChar))
      rashi = 'Virgo';
    else if (['r', 't', 'र', 'त', 'ऋ'].includes(firstChar)) rashi = 'Libra';
    else if (['n', 'y', 'न', 'य'].includes(firstChar)) rashi = 'Scorpio';
    else if (['y', 'f', 'भ', 'ध', 'फ', 'ढ'].includes(firstChar))
      rashi = 'Sagittarius';
    else if (['g', 'j', 'z', 'b', 'x', 'ज', 'ख', 'ग', 'ब'].includes(firstChar))
      rashi = 'Capricorn';
    else if (['s', 'स', 'श'].includes(firstChar)) rashi = 'Aquarius';
    else if (['d', 'c', 'द', 'थ', 'झ', 'ञ'].includes(firstChar))
      rashi = 'Pisces';

    let nakshatraLocal = calcNakstra(rashi);

    setData({name: nameVal, zodiac: rashi, nakshatra: nakshatraLocal});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBox}
        value={data.name}
        onChangeText={findRashi}
        placeholder={t('Enter Name')}
        placeholderTextColor="#dfe0e8"
      />
      <Details
        label={t('Zodiac')}
        data={t(data.zodiac)}
        customStyle={{marginHorizontal: 20}}
      />
      <Details
        label={t('Nakshatra')}
        data={getNakstraString(data.nakshatra)}
        customStyle={{marginHorizontal: 20}}
      />
    </SafeAreaView>
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
