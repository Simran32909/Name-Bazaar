import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import AlphabetTile from '../components/AlphabetTile';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import {getNamesData} from '../utils/getNamesData';

export default function AlphabetList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();

  const selectedData = getNamesData(selection);

  // get language
  // console.log('current language: ', i18n.language);
  const curLanguage = i18n.language;
  let namesData;
  if (curLanguage == LANGUAGES.HINDI.key)
    namesData = selectedData[LANGUAGES.HINDI.label];
  else namesData = selectedData[LANGUAGES.ENGLISH.label];

  const alphabetsList = Object.keys(namesData);

  return (
    <SafeAreaView>
      <FlatList
        data={alphabetsList}
        renderItem={({item}) => (
          <AlphabetTile text={item} data={namesData[item]} />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
