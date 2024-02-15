import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';

const DailyUpdates = () => {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  const {data, loading, error, netState} = useFirebaseData(
    'data',
    'Daily Updates',
  );

  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView
        style={
          data?.[language]?.length != 0
            ? styles.container
            : [
                styles.container,
                {justifyContent: 'center', alignItems: 'center'},
              ]
        }>
        {data?.[language]?.length != 0 ? (
          <FlatList
            data={data[language]}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <CustomText text={`${index + 1}: ${item}`} size={28} />
            )}
          />
        ) : (
          <CustomText
            text={t('Daily Updates Msg')}
            size={24}
            fontColor={'grey'}
          />
        )}
      </SafeAreaView>
    </ErrorWrapper>
  );
};

export default DailyUpdates;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
});
