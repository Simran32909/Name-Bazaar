import {Image, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../components/common/CustomText';
import icons from '../constants/icons';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';
import useFirebaseData from '../hooks/useFirebaseData';
import ErrorWrapper from '../components/ErrorWrapper';
import {LANGUAGES} from '../constants/consts';

export default function ContactNotice() {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;

  const [dataLang, setDataLang] = useState({});
  const {data, loading, error, netState} = useFirebaseData(
    'data',
    'Contact Us',
  );
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  useEffect(() => {
    if (Object.keys(data).length != 0) setDataLang(data[language]);
  }, [data, language]);

  const noOfPoints = [1, 2, 3, 6, 7, 8, 9, 10, 11, 12];

  const Points = ({text}) => (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        // alignItems: 'flex-start',
      }}>
      <Image source={icons.star} style={{marginTop: 3}} />
      <CustomText
        // text={t(`${text}`)}
        text={text}
        size={20}
        customStyle={{flex: 1, flexWrap: 'wrap'}}
        includeFontPadding={false}
      />
    </View>
  );

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <CustomText text={t('For more info')} size={20} />
          {/* <CustomText text={t('Paid Services')} /> */}
          {Object.keys(data).length != 0 && (
            <View style={styles.whtsapDiv}>
              <PhoneNo number={data['Phone Nos'][0]} />
              <PhoneNo number={data['Phone Nos'][1]} />
            </View>
          )}
          <CustomText
            text={dataLang.blueheading1}
            fontColor={'#ed7d31'}
            size={25}
            weight={'700'}
            fontStyle={'italic'}
          />
          <CustomText
            text={dataLang.blueheading2}
            fontColor={'#ed7d31'}
            size={28}
            weight={'bold'}
            fontStyle={'italic'}
          />
          <CustomText text={dataLang.para1} size={20} />
          <View style={styles.points}>
            <CustomText
              text={dataLang.blueheading3}
              fontColor={'#ed7d31'}
              size={20}
              weight={'bold'}
            />
            {Object.keys(dataLang).length != 0 &&
              dataLang.points.map((val, index) => (
                <Points text={val} key={index} />
              ))}
          </View>
          <CustomText text={dataLang.para2} size={20} />
          <CustomText text={dataLang.para3} size={20} />
          <View style={styles.whtsapDiv}>
            {data.length != 0 &&
              Object.values(data['Phone Nos']).map((phoneNo, index) => (
                <PhoneNo key={index} number={phoneNo} />
              ))}
          </View>
          <CustomText text={t('Destiny in your hands')} size={20} />
        </ScrollView>
      </SafeAreaView>
    </ErrorWrapper>
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
