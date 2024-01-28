import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import AlphabetTile from '../components/AlphabetTile';
import useFirebaseData from '../hooks/useFirebaseData';
import CustomText from '../components/common/CustomText';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';

export default function AlphabetList({route}) {
  const {selection} = route.params;
  const {data, loading, error, netState} = useFirebaseData(selection);
  const {t, i18n} = useTranslation();

  // const alphabetsList = Object.keys(data).sort();

  const curLanguage = i18n.language;

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

  if (netState.isConnected != null && !netState.isConnected) {
    // console.log('line 77: ', netState.isConnected);
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CustomText text={t('No Internet')} size={18} fontColor="black" />
      </SafeAreaView>
    );
  }

  if (loading)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={50} />
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView>
        <CustomText text={error} fontColor="black" size={16} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <FlatList
        data={alphabetsList}
        //here item is alphabets -> A,B,C ......
        renderItem={({item}) => <AlphabetTile text={item} data={data[item]} />}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
