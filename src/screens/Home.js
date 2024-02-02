import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import icons from '../constants/icons';
import {ScrollView} from 'react-native-gesture-handler';
import {SELECTIONS} from '../constants/consts';
import {useTranslation} from 'react-i18next';
import NAVIGATIONS from '../constants/navigationConstants';

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
          toPath={NAVIGATIONS.UNIQUE_NAMES.name}
        />
        <Card
          imgSrc={icons.daily_updates}
          title={t(SELECTIONS.DAILY_UPDATES)}
          selection={SELECTIONS.DAILY_UPDATES}
          toPath={NAVIGATIONS.DAILY_UPDATES.name}
        />
        <Card
          imgSrc={icons.family}
          title={t(SELECTIONS.BABY)}
          selection={SELECTIONS.BABY}
          toPath={NAVIGATIONS.CONTACT_NOTICE.name}
        />
        <Card
          imgSrc={icons.astro}
          title={t(SELECTIONS.ASTRO)}
          selection={SELECTIONS.ASTRO}
          toPath={NAVIGATIONS.RASHI_CALCULATION.name}
        />
        <Card
          imgSrc={icons.shop}
          title={t(SELECTIONS.SHOP)}
          selection={SELECTIONS.SHOP}
          toPath={NAVIGATIONS.CONTACT_NOTICE.name}
        />
        <Card
          imgSrc={icons.school}
          title={t(SELECTIONS.SCHOOL)}
          selection={SELECTIONS.SCHOOL}
          toPath={NAVIGATIONS.CONTACT_NOTICE.name}
        />
        <Card
          imgSrc={icons.company}
          title={t(SELECTIONS.FACTORY_COMPANY)}
          selection={SELECTIONS.COMPANY}
          toPath={NAVIGATIONS.CONTACT_NOTICE.name}
        />
        <Card
          imgSrc={icons.name}
          title={t(SELECTIONS.NAME)}
          selection={SELECTIONS.NAME}
          toPath={NAVIGATIONS.CONTACT_NOTICE.name}
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
