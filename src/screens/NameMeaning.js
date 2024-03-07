import {Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import {ScrollView} from 'react-native-gesture-handler';
import Details from '../components/Details';
import CustomButton from '../components/common/CustomButton';

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
  //     'famous personalities': '',
  // },

  const dataKeys = Object.keys(nameData).sort();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          gap: 20,
        }}>
        <Details label={`${t('Name')}`} data={name} />
        <View style={styles.divider} />
        {dataKeys.length != 0 &&
          dataKeys.map((label, index) => {
            let processedLabel = label.trim();
            processedLabel =
              !isNaN(Number(label[0])) && label[1] == '.'
                ? label.slice(2).trim()
                : label.trim();

            return processedLabel == 'famous personalities' ||
              processedLabel == 'प्रसिद्ध व्यक्तित्व' ? (
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
                    curLanguage == LANGUAGES.ENGLISH.key
                      ? 'Famous Personalities: '
                      : processedLabel + ': '
                  }
                  fontColor="white"
                  size={35}
                  weight="bold"
                />
                {nameData[label].map(
                  (item, index) =>
                    item.name && (
                      <CustomButton
                        key={index}
                        text={`${index + 1}: ${item.name}`}
                        textSize={28}
                        textColor={'white'}
                        handlePress={() =>
                          item.link ? Linking.openURL(item.link) : null
                        }
                      />
                    ),
                )}
              </View>
            ) : (
              <Details label={processedLabel} data={nameData[label]} />
            );
          })}
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
