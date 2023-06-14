import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';

export default function NameMeaning({route}) {
  const {data} = route.params;
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameContainer}>
        <CustomText
          text={`${t('Name')}: `}
          fontColor="white"
          size={35}
          weight="bold"
        />
        <CustomText text={data.name} fontColor="white" size={28} />
      </View>
      <View style={styles.divider} />
      <View style={styles.meaningContainer}>
        <CustomText
          text={`${t('Meaning')}: `}
          fontColor="white"
          size={35}
          weight="bold"
        />
        <CustomText
          text={data.meaning}
          fontColor="white"
          size={28}
          textAlignment="justify"
        />
      </View>
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
    padding: 20,
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
