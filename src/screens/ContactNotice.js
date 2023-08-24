import {Image, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import icons from '../constants/icons';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';

export default function ContactNotice() {
  const {t} = useTranslation();

  const noOfPoints = [1, 2, 3, 4, 5, 13, 6, 7, 8, 9, 10, 11, 12];

  const Points = ({text}) => (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        // alignItems: 'flex-start',
      }}>
      <Image source={icons.star} style={{marginTop: 3}} />
      <CustomText
        text={t(`${text}`)}
        size={20}
        customStyle={{flex: 1, flexWrap: 'wrap'}}
        includeFontPadding={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomText text={t('For more info')} size={20} />
        <CustomText text={t('Paid Services')} />
        <View style={styles.whtsapDiv}>
          <PhoneNo number="8948840344" />
          <PhoneNo number="8949988068" />
        </View>
        <CustomText
          text={t('Reveal Destiny')}
          fontColor={'#2196F3'}
          size={25}
          weight={'700'}
          fontStyle={'italic'}
        />
        <CustomText
          text={t('NAME BAZAAR CONSULTANCY SERVICES')}
          fontColor={'#2196F3'}
          size={28}
          weight={'bold'}
          fontStyle={'italic'}
        />
        <CustomText text={t('SubHead')} size={20} />
        <View style={styles.points}>
          <CustomText
            text={t('Our Services Includes')}
            fontColor={'#2196F3'}
            size={20}
            weight={'bold'}
          />
          {noOfPoints.map(val => (
            <Points text={`P${val}`} key={val} />
          ))}
        </View>
        <CustomText text={t('Our Experts')} size={20} />
        <CustomText text={t('Then what are you waiting')} size={20} />
        <View style={styles.whtsapDiv}>
          <PhoneNo number="8948840344" />
          <PhoneNo number="8949988068" />
        </View>
        <CustomText text={t('Destiny in your hands')} size={20} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    gap: 10,
  },
  points: {
    gap: 7,
  },
  whtsapDiv: {
    gap: 20,
    marginVertical: 10,
  },
});
