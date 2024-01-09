import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import CustomText from '../components/common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function NakstrasScreen() {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  const curLanguage = i18n.language;

  const nakshatras = {
    Ashwini: 'अश्विनी',
    Bharani: 'भरणी',
    Krittika: 'कृत्तिका',
    Rohini: 'रोहिणी',
    Mrighasira: 'मृगशिरा',
    Ardra: 'आर्द्रा',
    Punarvasu: 'पुनर्वसु',
    Pushya: 'पुष्य',
    Ashlesha: 'आश्लेषा',
    Magha: 'मघा',
    'Purva Phalguni': 'पूर्वाफाल्गुनी',
    'Uttara Phalguni': 'उत्तराफाल्गुनी',
    Hasta: 'हस्त',
    Chitra: 'चित्रा',
    Swati: 'स्वाति',
    Vishaka: 'विशाखा',
    Anuradha: 'अनुराधा',
    Jyestha: 'ज्येष्ठा',
    Moola: 'मूल',
    Purvashada: 'पूर्वाषाढ़ा',
    Uttarashada: 'उत्तराषाढ़ा',
    Sharavan: 'श्रवण',
    Dhanishta: 'धनिष्ठा',
    Shatabisha: 'शतभिषा',
    Purvabhadra: 'पूर्वाभाद्रपद',
    Uttarabhadra: 'उत्तराभाद्रपद',
    Revat: 'रेवती',
  };

  return (
    <SafeAreaView>
      <FlatList
        data={
          curLanguage == LANGUAGES.HINDI.key
            ? Object.values(nakshatras)
            : Object.keys(nakshatras)
        }
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(NAVIGATIONS.CONTACT_NOTICE.name)
            }>
            <View style={styles.tile}>
              <CustomText text={item[0]} size={50} fontColor={'white'} />
              <CustomText text={item} size={20} fontColor={'white'} />
            </View>
          </TouchableWithoutFeedback>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#2196F3',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    height: 200,
  },
});
