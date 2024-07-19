import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import PhoneNo from '../components/PhoneNo';
import useFirebaseData from '../hooks/useFirebaseData';
import ErrorWrapper from '../components/ErrorWrapper';
import {LANGUAGES} from '../constants/consts';

export default function DirectContact() {
  const {t, i18n} = useTranslation();
  const {data, loading, error, netState} = useFirebaseData(
    'data',
    'Direct Contact',
  );

    useEffect(() => {
      console.log("datain driect ",data);
    },[data])

  const curLanguage =
    i18n.language == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  //FIXME: add scrollview
  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <View>
            {data.length != 0 &&
              data[curLanguage].map((point, index) => (
                <CustomText key={index} text={`${point}`} size={28} />
              ))}
          </View>
          <View style={styles.whtsapDiv}>
            {data.length != 0 &&
            (data?.PhoneNos).map((phoneNo, index) => (
              <PhoneNo key={index} number={phoneNo} index={index}/>
            ))}
          </View>
        </ScrollView>
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
