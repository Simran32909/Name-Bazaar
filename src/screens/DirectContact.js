import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';
import useFirebaseData from '../hooks/useFirebaseData';
import ErrorWrapper from '../components/ErrorWrapper';

export default function DirectContact() {
  const {t} = useTranslation();
  const {data, loading, error, netState} = useFirebaseData('data', 'Phone Nos');

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <CustomText text={t('Direct Contact Msg')} size={30} />
        <View style={styles.whtsapDiv}>
          {Object.values(data).map((phoneNo, index) => (
            <PhoneNo key={index} number={phoneNo} />
          ))}
        </View>
      </SafeAreaView>
    </ErrorWrapper>
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
