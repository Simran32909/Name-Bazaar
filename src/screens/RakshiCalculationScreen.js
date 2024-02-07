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

  // const getNakstraString = val => {
  //   return val
  //     .split(',')
  //     .map(val => t(val.trim()))
  //     .join(', ');
  // };

  const calcNakstra = (lowercaseName, rashi) => {
    let nakshatra = '';
    const firstThreeLetters = lowercaseName.substring(0, 3);
    const firstTwoLetters = lowercaseName.substring(0, 2);
    const firstChar = lowercaseName.charAt(0);
    if (
      ['चू', 'चे', 'चो', 'ला', 'chu', 'che', 'cho', 'la'].includes(
        firstTwoLetters,
      ) ||
      ['l'].includes(firstChar)
    )
      nakshatra = 'अश्विनी';
    else if (
      ['ली', 'लू', 'ले', 'लो', 'li', 'lu', 'le', 'lo'].includes(firstTwoLetters)
    )
      nakshatra = 'भरणी';
    else if (
      ['aa'].includes(firstTwoLetters) ||
      ['अ', 'इ', 'उ', 'ए', 'a', 'i', 'u', 'e'].includes(firstChar)
    )
      nakshatra = 'कृत्तिका';
    else if (
      ['वा', 'वी', 'वू'].includes(firstTwoLetters) ||
      ['ओ', 'o', 'v', 'w'].includes(firstChar)
    )
      nakshatra = 'रोहिणी';
    else if (
      ['वे', 'वो', 'का', 'की', 've', 'vo', 'ka', 'ki'].includes(
        firstTwoLetters,
      ) ||
      ['k'].includes(firstChar)
    )
      nakshatra = 'मृगशिरा';
    else if (
      ['कू', 'ku', 'gh', 'ch'].includes(firstTwoLetters) ||
      ['घ', 'ङ', 'छ', 'q'].includes(firstChar)
    )
      nakshatra = 'आर्द्रा';
    else if (
      ['के', 'को', 'ही', 'ke', 'ko', 'ha', 'hi'].includes(firstTwoLetters) ||
      ['ह', 'h'].includes(firstChar)
    )
      nakshatra = 'पुनर्वसु';
    else if (
      ['हू', 'हे', 'हो', 'डा', 'hu', 'he', 'ho', 'da'].includes(firstTwoLetters)
    )
      nakshatra = 'पुष्य';
    else if (
      ['डी', 'डू', 'डे', 'डो'].includes(firstTwoLetters) ||
      ['d'].includes(firstChar)
    )
      nakshatra = 'आश्लेषा';
    else if (
      ['मा', 'मी', 'मू', 'मे'].includes(firstTwoLetters) ||
      ['m'].includes(firstChar)
    )
      nakshatra = 'मघा';
    else if (
      ['मो', 'टा', 'टी', 'टू', 'mo'].includes(firstTwoLetters) ||
      ['t'].includes(firstChar)
    )
      nakshatra = 'पूर्वाफाल्गुनी';
    else if (
      ['टे', 'टो', 'पा', 'पी', 'te', 'to', 'pa', 'pi'].includes(
        firstTwoLetters,
      ) ||
      ['p'].includes(firstChar)
    )
      nakshatra = 'उत्तराफाल्गुनी';
    else if (
      ['पू', 'pu', 'sh', 'th'].includes(firstTwoLetters) ||
      ['ष', 'ण', 'ठ'].includes(firstChar)
    )
      nakshatra = 'हस्त';
    else if (
      ['पे', 'पो', 'रा', 'री', 'pe', 'po', 'ra', 'ri'].includes(
        firstTwoLetters,
      ) ||
      ['r'].includes(firstChar)
    )
      nakshatra = 'चित्रा';
    else if (
      ['रू', 'रे', 'रो', 'ता', 'ru', 're', 'ro', 'ta'].includes(
        firstTwoLetters,
      ) ||
      ['t'].includes(firstChar)
    )
      nakshatra = 'स्वाति';
    else if (
      ['ती', 'तू', 'ते', 'तो', 'ti', 'tu', 'te', 'to'].includes(firstTwoLetters)
    )
      nakshatra = 'विशाखा';
    else if (
      ['ना', 'नी', 'नू', 'ने', 'na', 'ni', 'nu', 'ne'].includes(
        firstTwoLetters,
      ) ||
      ['n'].includes(firstChar)
    )
      nakshatra = 'अनुराधा';
    else if (
      ['नो', 'या', 'यी', 'यू', 'no', 'ya', 'yi', 'yu'].includes(
        firstTwoLetters,
      ) ||
      ['y'].includes(firstChar)
    )
      nakshatra = 'ज्येष्ठा';
    else if (
      ['bha', 'bhi'].includes(firstThreeLetters) ||
      ['ये', 'यो', 'भा', 'भी', 'ye', 'yo'].includes(firstTwoLetters)
    )
      nakshatra = 'मूल';
    else if (
      ['bhu', 'dha', 'pha'].includes(firstThreeLetters) ||
      ['भू', 'धा', 'फा', 'ढा'].includes(firstTwoLetters)
    )
      nakshatra = 'पूर्वाषाढ़ा';
    else if (
      ['bhe', 'bho'].includes(firstThreeLetters) ||
      ['भे', 'भो', 'जा', 'जी'].includes(firstTwoLetters) ||
      ['j', 'z', 'x', 'b'].includes(firstChar)
    )
      nakshatra = 'उत्तराषाढ़ा';
    else if (
      ['kha'].includes(firstThreeLetters) ||
      ['खी', 'खू', 'खे', 'खो'].includes(firstTwoLetters)
    )
      nakshatra = 'श्रवण';
    else if (
      ['गा', 'गी', 'गू', 'गे', 'ga', 'gi', 'gu', 'ge'].includes(
        firstTwoLetters,
      ) ||
      ['g'].includes(firstChar)
    )
      nakshatra = 'धनिष्ठा';
    else if (
      ['गो', 'सा', 'सी', 'सू', 'go'].includes(firstTwoLetters) ||
      ['s'].includes(firstChar)
    )
      nakshatra = 'शतभिषा';
    else if (
      ['से', 'सो', 'दा', 'दी', 'se', 'so', 'da', 'di'].includes(
        firstTwoLetters,
      ) ||
      ['d'].includes(firstChar)
    )
      nakshatra = 'पूर्वाभाद्रपद';
    else if (
      ['tha', 'jha'].includes(firstThreeLetters) ||
      ['दू', 'du'].includes(firstTwoLetters) ||
      ['थ', 'झ', 'ञ'].includes(firstChar)
    )
      nakshatra = 'उत्तराभाद्रपद';
    else if (
      ['cha', 'chi'].includes(firstThreeLetters) ||
      ['दे', 'दो', 'चा', 'ची', 'de', 'do'].includes(firstTwoLetters) ||
      ['c'].includes(firstChar)
    )
      nakshatra = 'रेवती';
    else nakshatra = 'Cannot get your nakshatra';

    return nakshatra;
  };

  const findRashi = nameVal => {
    const lowercaseName = nameVal.toLowerCase().trim();
    const firstThreeLetters = lowercaseName.substring(0, 3);
    const firstTwoLetters = lowercaseName.substring(0, 2);
    const firstChar = lowercaseName.charAt(0);
    let rashi = '';

    if (nameVal.trim() == '') {
      setData({name: '', zodiac: '', nakshatra: ''});
      return;
    }

    if (
      ['चू', 'चे', 'चो'].includes(firstTwoLetters) ||
      ['अ', 'आ', 'ल', 'a', 'c', 'l'].includes(firstChar)
    )
      rashi = 'Aries';
    else if (
      [
        'इ',
        'उ',
        'ए',
        'ओ',
        'ई',
        'ऊ',
        'ऐ',
        'औ',
        'व',
        'e',
        'i',
        'o',
        'u',
        'v',
        'w',
      ].includes(firstChar)
    )
      rashi = 'Taurus';
    else if (
      ['gh', 'ch', 'हा'].includes(firstTwoLetters) ||
      ['घ', 'ङ', 'छ', 'ह', 'क', 'h', 'k', 'q'].includes(firstChar)
    )
      rashi = 'Gemini';
    else if (
      ['ही', 'हू', 'हे', 'हो', 'hi', 'hu', 'he', 'ho'].includes(
        firstTwoLetters,
      ) ||
      ['ड', 'd'].includes(firstChar)
    )
      rashi = 'Cancer';
    else if (['म', 'ट', 'm', 't'].includes(firstChar)) rashi = 'Leo';
    else if (
      ['टो', 'sh', 'th'].includes(firstTwoLetters) ||
      ['ष', 'ण', 'ठ', 'ढ', 'प', 'p'].includes(firstChar)
    )
      rashi = 'Virgo';
    else if (['र', 'त', 'ऋ', 'r', 't'].includes(firstChar)) rashi = 'Libra';
    else if (
      ['तो', 'to'].includes(firstTwoLetters) ||
      ['न', 'य', 'n', 'y'].includes(firstChar)
    )
      rashi = 'Scorpio';
    else if (
      ['ये', 'यो', 'ye', 'yo', 'bh', 'dh', 'ph'].includes(firstTwoLetters) ||
      ['भ', 'ध', 'फ', 'ढ'].includes(firstChar)
    )
      rashi = 'Sagittarius';
    else if (
      ['bho'].includes(firstThreeLetters) ||
      ['भो', 'गा', 'गी', 'गि', 'kh'].includes(firstTwoLetters) ||
      ['ग', 'ज', 'ख', 'ब', 'g', 'j', 'z', 'b', 'x'].includes(firstChar)
    )
      rashi = 'Capricorn';
    else if (
      ['गू', 'गे', 'गो', 'दा', 'gu', 'ge', 'go', 'da'].includes(
        firstTwoLetters,
      ) ||
      ['स', 'श', 's'].includes(firstChar)
    )
      rashi = 'Aquarius';
    else if (
      [
        'दी',
        'दि',
        'दू',
        'दु',
        'दृ',
        'दे',
        'दो',
        'चा',
        'ची',
        'चि',
        'th',
        'jh',
        'ca',
        'ci',
      ].includes(firstTwoLetters) ||
      ['द', 'थ', 'झ', 'ञ', 'च'].includes(firstChar)
    )
      rashi = 'Pisces';
    else {
      setData({
        name: nameVal,
        zodiac: 'Cannot get your zodiac',
        nakshatra: 'Cannot get your nakshatra',
      });
    }

    let nakshatraLocal = calcNakstra(lowercaseName, rashi);
    setData({name: nameVal, zodiac: rashi, nakshatra: nakshatraLocal});
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
        data={t(data.nakshatra)}
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
