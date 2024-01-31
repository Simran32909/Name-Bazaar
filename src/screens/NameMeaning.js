import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';

export default function NameMeaning({route}) {
  const {nameData, name} = route.params;
  const {t} = useTranslation();

  // data coming here is of the form
  // {
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': '',
  // },

  const Details = ({label, data}) => {
    return (
      <View>
        <CustomText
          text={`${t(label)}: `}
          fontColor="white"
          size={35}
          weight="bold"
        />
        <CustomText
          text={data}
          fontColor="white"
          size={28}
          textAlignment="justify"
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameContainer}>
        <CustomText
          text={`${t('Name')}: `}
          fontColor="white"
          size={35}
          weight="bold"
        />
        <CustomText text={name} fontColor="white" size={28} />
      </View>
      <View style={styles.divider} />
      <Details label={'Meaning'} data={nameData['meaning']} />
      <Details label={'Etymology'} data={nameData['etymology']} />
      <Details label={'Zodiac'} data={nameData['zodiac']} />
      <Details label={'Horoscope'} data={nameData['horoscope']} />
      <Details
        label={'Famous Personalities'}
        data={nameData['famous personalities']}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: 'white',
    height: 5,
  },
  meaningContainer: {
    justifyContent: 'center',
  },
});
