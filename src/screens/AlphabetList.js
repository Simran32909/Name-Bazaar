import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import AlphabetTile from '../components/AlphabetTile';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES, SELECTIONS} from '../constants/consts';
import {useTranslation} from 'react-i18next';
import ErrorWrapper from '../components/ErrorWrapper';

export default function AlphabetList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;

  let collection;
  if (selection == SELECTIONS.BOY) collection = 'boys';
  else if (selection == SELECTIONS.GIRL) collection = 'girls';

  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  const {data, loading, error, netState} = useFirebaseData(
    collection,
    language,
  );

  const hindiAlphabets = [
    'अ',
    'आ',
    'इ',
    'ई',
    'उ',
    'ऊ',
    'ए',
    'ऐ',
    'ओ',
    'औ',
    'अं',
    'अः',
    'ऋ',
    'ॠ',
    'क',
    'ख',
    'ग',
    'घ',
    'ङ',
    'च',
    'छ',
    'ज',
    'झ',
    'ञ',
    'ट',
    'ठ',
    'ड',
    'ढ',
    'ण',
    'त',
    'थ',
    'द',
    'ध',
    'न',
    'प',
    'फ',
    'ब',
    'भ',
    'म',
    'य',
    'र',
    'ल',
    'व',
    'श',
    'ष',
    'स',
    'ह',
    'क्ष',
    'त्र',
    'ज्ञ',
  ];

  // data is nested in the form of :
  // A : {
  //  "arjun" : {
  //     name : "",
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': '',
  //   },
  // }

  const alphabetsList =
    curLanguage == LANGUAGES.ENGLISH.key
      ? Object.keys(data).sort()
      : hindiAlphabets;

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView>
        <FlatList
          data={alphabetsList}
          //here item is alphabets -> A,B,C ......
          renderItem={({item}) => (
            <AlphabetTile text={item} data={data[item]} />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </ErrorWrapper>
  );
}
