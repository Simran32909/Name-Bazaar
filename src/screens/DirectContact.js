import {View, SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';
import useFirebaseData from '../hooks/useFirebaseData';

export default function DirectContact() {
  const {t} = useTranslation();
  const {data, loading, error, netState} = useFirebaseData('data', 'Phone Nos');

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
      <CustomText text={t('Direct Contact Msg')} size={30} />
      <View style={styles.whtsapDiv}>
        {Object.values(data).map((phoneNo, index) => (
          <PhoneNo key={index} number={phoneNo} />
        ))}
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
