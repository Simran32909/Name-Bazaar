import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import icons from '../constants/icons';
import {ScrollView} from 'react-native-gesture-handler';
import {SELECTIONS} from '../constants/consts';
import {useTranslation} from 'react-i18next';

export default function Home() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{flex: 1, marginVertical: 20}}>
        <Card
          imgSrc={icons.boy}
          title={t(SELECTIONS.BOY)}
          selection={SELECTIONS.BOY}
        />
        <Card
          imgSrc={icons.girl}
          title={t(SELECTIONS.GIRL)}
          selection={SELECTIONS.GIRL}
        />
        <Card
          imgSrc={icons.unique}
          title={t(SELECTIONS.UNIQUE)}
          selection={SELECTIONS.UNIQUE}
        />
        <Card
          imgSrc={icons.astro}
          title={t(SELECTIONS.ASTRO)}
          selection={SELECTIONS.ASTRO}
        />
        <Card
          imgSrc={icons.shop}
          title={t(SELECTIONS.SHOP)}
          selection={SELECTIONS.SHOP}
        />
        <Card
          imgSrc={icons.school}
          title={t(SELECTIONS.SCHOOL)}
          selection={SELECTIONS.SCHOOL}
        />
        <Card
          imgSrc={icons.factory}
          title={t(SELECTIONS.FACTORY)}
          selection={SELECTIONS.FACTORY}
        />
        <Card
          imgSrc={icons.company}
          title={t(SELECTIONS.COMPANY)}
          selection={SELECTIONS.COMPANY}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    rowGap: 15,
    paddingBottom: 10,
  },
});
