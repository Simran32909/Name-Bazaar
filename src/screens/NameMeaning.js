import {Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import {ScrollView} from 'react-native-gesture-handler';
import Details from '../components/Details';

export default function NameMeaning({route}) {
  const {nameData, name} = route.params;
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;

  // data coming here is of the form
  // {
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': [{link:'',name:''}],
  // },

  const labels =
    curLanguage == LANGUAGES.ENGLISH.key
      ? ['meaning', 'etymology', 'zodiac', 'horoscope', 'famous personalities']
      : ['अर्थ', 'व्युत्पत्ति', 'राशि', 'राशिफल', 'प्रसिद्ध व्यक्तित्व'];

  const newLabels = Object.keys(nameData).filter(
    label => !labels.includes(label.toLowerCase().trim()),
  );
  // console.log('labels: ', labels);
  // console.log('new labels: ', newLabels);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          gap: 20,
        }}>
        <Details
          label={`${t('Name')}`}
          data={name}
          // customStyle={styles.nameContainer}
        />
        <View style={styles.divider} />
        {/* <Details label={'Meaning'} data={nameData['meaning']} />
        <Details label={'Etymology'} data={nameData['etymology']} />
        <Details label={'Zodiac'} data={nameData['zodiac']} />
        <Details label={'Horoscope'} data={nameData['horoscope']} />
        <Details
          label={'Famous Personalities'}
          data={nameData['famous personalities']}
        /> */}
        {labels.map((label, index) =>
          label.toLowerCase().trim() == 'famous personalities' ||
          label.toLowerCase().trim() == 'प्रसिद्ध व्यक्तित्व' ? (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <CustomText
                text={
                  label.toLowerCase().trim() == 'famous personalities'
                    ? 'Famous Personalities:'
                    : label + ':'
                }
                fontColor="white"
                size={35}
                weight="bold"
              />
              <View>
                {nameData[label].map((obj, index) => {
                  return (
                    <CustomText
                      key={index}
                      text={obj.name}
                      handlePress={() =>
                        obj.link ? Linking.openURL(obj.link) : {}
                      }
                      fontColor="white"
                      size={28}
                    />
                  );
                })}
              </View>
            </View>
          ) : (
            <Details key={index} label={label} data={nameData[label]} />
          ),
        )}
        {newLabels.map((label, index) => (
          <Details key={index} label={label} data={nameData[label]} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    // justifyContent: 'center',
    gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: 'white',
    height: 5,
  },
  meaningContainer: {
    justifyContent: 'center',
  },
});
