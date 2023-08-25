import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import NAKSHATRAS from '../constants/data/nameNakshatras';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import NameTile from '../components/NameTile';

export default function NakstrasScreen() {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  let namesData;

  if (curLanguage == LANGUAGES.HINDI.key)
    namesData = NAKSHATRAS[LANGUAGES.HINDI.label];
  else namesData = NAKSHATRAS[LANGUAGES.ENGLISH.label];

  return (
    <SafeAreaView>
      <FlatList
        // style={styles.listStyle}
        data={namesData}
        renderItem={({item}) => <NameTile data={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
