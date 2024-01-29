import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';

export default function Information() {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  const {data, loading, error, netState} = useFirebaseData(
    'data',
    'Information',
  );

  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  if (netState.isConnected != null && !netState.isConnected) {
    // console.log('line 77: ', netState.isConnected);
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CustomText text={t('No Internet')} size={18} fontColor="black" />
      </SafeAreaView>
    );
  }

  if (loading)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={50} />
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView>
        <CustomText text={error} fontColor="black" size={16} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data[language]}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <CustomText text={item} size={28} />}
      />
      {/* <CustomText text={t('Info Msg')} size={28} /> */}
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
