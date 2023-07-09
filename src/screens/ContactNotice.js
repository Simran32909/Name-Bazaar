import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import icons from '../constants/icons';
import {useTranslation} from 'react-i18next';

export default function ContactNotice() {
  const {t} = useTranslation();

  const noOfPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const Points = ({text}) => (
    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
      <Image source={icons.star} />
      <CustomText text={t(`${text}`)} size={20} />
    </View>
  );

  const PhoneNo = ({number}) => (
    <Pressable
      style={styles.phoneNo}
      onPress={() => {
        Linking.openURL('whatsapp://send?text=' + `&phone=91${number}`)
          .then(() => {
            console.log('WhatsApp Opened for ' + `${number}`);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      }}>
      <Image
        source={icons.whatsapp}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <CustomText text={number} size={25} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
    // marginTop: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  points: {
    gap: 5,
  },
  whtsapDiv: {
    gap: 20,
    marginVertical: 10,
  },
  phoneNo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
