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
import Feather from 'react-native-vector-icons/Feather';

export default function ContactNotice() {
  const {t} = useTranslation();

  const noOfPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const Points = ({text}) => (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}>
      <Image source={icons.star} />
      <CustomText
        text={t(`${text}`)}
        size={20}
        customStyle={{flex: 1, flexWrap: 'wrap'}}
      />
    </View>
  );

  const PhoneNo = ({number}) => (
    <View style={styles.phoneBox}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#2196F3',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 8,
          gap: 5,
        }}>
        <CustomText
          text="Click Here"
          size={20}
          fontColor="white"
          letterSpacing={0.7}
          fontFamily="sans-serif-light"
        />
        <Feather name="arrow-right-circle" color="white" size={22} />
      </View>
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
            width: 35,
            height: 35,
          }}
        />
        <CustomText
          text={number}
          size={20}
          letterSpacing={0.5}
          fontFamily="sans-serif-medium"
        />
      </Pressable>
    </View>
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
  phoneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneNo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
