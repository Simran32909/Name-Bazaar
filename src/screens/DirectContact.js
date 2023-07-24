import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';

export default function DirectContact() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <CustomText text={t('Direct Contact Msg')} size={30} />
      <View style={styles.whtsapDiv}>
        <PhoneNo number="8948840344" />
        <PhoneNo number="8949988068" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  whtsapDiv: {
    gap: 20,
    marginVertical: 30,
  },
});
