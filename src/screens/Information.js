import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';

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

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data[language]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <CustomText text={item} size={28} />}
        />
        {/* <CustomText text={t('Info Msg')} size={28} /> */}
      </SafeAreaView>
    </ErrorWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
});
