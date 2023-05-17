import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import icons from '../constants/icons';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{flex: 1, marginVertical: 20}}>
        <Card imgSrc={icons.boy} title="Boy" />
        <Card imgSrc={icons.girl} title="Girl" />
        <Card imgSrc={icons.shop} title="Shop" />
        <Card imgSrc={icons.school} title="School" />
        <Card imgSrc={icons.factory} title="Factory" />
        <Card imgSrc={icons.company} title="Company" />
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
