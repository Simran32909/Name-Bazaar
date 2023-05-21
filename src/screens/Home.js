import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import icons from '../constants/icons';
import {ScrollView} from 'react-native-gesture-handler';
import SELECTIONS from '../constants/selections';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{flex: 1, marginVertical: 20}}>
        <Card imgSrc={icons.boy} title={SELECTIONS.BOY} />
        <Card imgSrc={icons.girl} title={SELECTIONS.GIRL} />
        <Card imgSrc={icons.shop} title={SELECTIONS.SHOP} />
        <Card imgSrc={icons.school} title={SELECTIONS.SCHOOL} />
        <Card imgSrc={icons.factory} title={SELECTIONS.FACTORY} />
        <Card imgSrc={icons.company} title={SELECTIONS.COMPANY} />
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
