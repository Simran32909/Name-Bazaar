import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../components/common/CustomText';
import CustomButton from '../components/common/CustomButton';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';

export default function SelectLanguage({route}) {
  const {t, i18n} = useTranslation();
  const {setLang, setLoading} = route.params;

  async function changeLang(language) {
    // setLoading(true);
    await i18n.changeLanguage(language);
    // setLoading(false);
    setLang(true);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <CustomText
          text={t('Naam Bazaar')}
          fontColor="white"
          size={25}
          fontStyle="italic"
        />
      </View>
      {/* <CustomText
        text="Welcome! Please Select a Language"
        // size={10}
        fontStyle="italic"
      /> */}
      <CustomButton
        text={LANGUAGES.HINDI.text}
        handlePress={() => {
          setLoading(true);
          changeLang(LANGUAGES.HINDI.key);
          console.log('selected hindi');
        }}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
      <CustomButton
        text={LANGUAGES.ENGLISH.text}
        handlePress={() => {
          setLoading(true);
          changeLang(LANGUAGES.ENGLISH.key);
          console.log('selected english');
        }}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 20,
  },
  logo: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    width: '50%',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
});
