import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';

export default function Information() {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <CustomText text={t('Info Msg')} size={28} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
});
