import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import icons from '../constants/icons';
import CustomText from '../components/common/CustomText';
import CustomButton from '../components/common/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContainer}>
          <Card imgSrc={icons.boy} title="Boy" />
          <Card imgSrc={icons.girl} title="Girl" />
        </View>
        <View style={styles.btnContainer}>
          <CustomText text="Get unique names for:" size={22} />
          <View style={styles.btnGridView}>
            <CustomButton text="BOYS" />
            <CustomButton text="GIRLS" />
            <CustomButton text="SHOP" />
            <CustomButton text="SCHOOL" />
            <CustomButton text="FACTORY" />
            <CustomButton text="COMPANY" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // paddingVertical: 40,
  },
  container: {
    rowGap: 25,
    marginTop: 40,
  },
  cardContainer: {
    alignItems: 'center',
    rowGap: 15,
  },
  btnContainer: {
    // backgroundColor: 'green',
    rowGap: 10,
  },
  btnGridView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 5,
    rowGap: 5,
  },
});
