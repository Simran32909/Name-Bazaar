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
      {/* <View style={{flex: 1, backgroundColor: 'yellow'}}> */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{flex: 1, marginVertical: 20}}>
        {/* <View style={styles.cardContainer}> */}
        <Card imgSrc={icons.boy} title="Boy" />
        <Card imgSrc={icons.girl} title="Girl" />
        <Card imgSrc={icons.shop} title="Shop" />
        <Card imgSrc={icons.school} title="School" />
        <Card imgSrc={icons.factory} title="Factory" />
        <Card imgSrc={icons.company} title="Company" />
        {/* </View> */}
        {/* <View style={styles.btnContainer}>
          <CustomText text="Get unique names for:" size={22} />
          <View style={styles.btnGridView}>
            <CustomButton text="BOYS" />
            <CustomButton text="GIRLS" />
            <CustomButton text="SHOP" />
            <CustomButton text="SCHOOL" />
            <CustomButton text="FACTORY" />
            <CustomButton text="COMPANY" />
          </View>
        </View> */}
      </ScrollView>
      {/* </View> */}
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
    // rowGap: 25,
    rowGap: 15,
    paddingBottom: 10,
  },
  // cardContainer: {
  //   alignItems: 'center',
  // },
  // btnContainer: {
  //   rowGap: 10,
  // },
  // btnGridView: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   columnGap: 5,
  //   rowGap: 5,
  // },
});
