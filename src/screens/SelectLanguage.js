import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import CustomText from '../components/common/CustomText';
import CustomButton from '../components/common/CustomButton';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';
import {horizontalScale} from '../utils/metrics';
import icons from '../constants/icons';

export default function SelectLanguage({route}) {
  const {t, i18n} = useTranslation();
  const {setLang, setLoading} = route.params;

  async function changeLang(language) {
    // setLoading(true);
    await i18n.changeLanguage(language);
    // setLoading(false);
    setLang(true);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        text={`${'Welcome\nto'}`}
        size={32}
        weight={'bold'}
        textAlignment={'center'}
        fontColor={'#138ae8'}
        fontFamily={'cursive'}
      />
      <View style={styles.logo}>
        <CustomText
          text={t('Name Bazaar')}
          fontColor="white"
          size={30}
          weight={700}
          fontStyle="italic"
        />
      </View>
      {/* <CustomText
        text="Welcome! Please Select a Language"
        // size={10}
        fontStyle="italic"
      /> */}
      <Image
        source={icons.namaste}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <CustomButton
        text={LANGUAGES.HINDI.text}
        handlePress={() => {
          setLoading(true);
          changeLang(LANGUAGES.HINDI.key);
          console.log('selected hindi');
        }}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
      <CustomButton
        text={LANGUAGES.ENGLISH.text}
        handlePress={() => {
          setLoading(true);
          changeLang(LANGUAGES.ENGLISH.key);
          console.log('selected english');
        }}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 20,
  },
  logo: {
    backgroundColor: '#2196F3',
    paddingHorizontal: horizontalScale(60),
    // width: '90%',
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    width: '50%',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
});
