import {StyleSheet, FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';
import Details from '../components/Details';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect} from 'react';
import CustomText from '../components/common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

const PetName = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const curLanguage = i18n.language;
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;
  const {data, loading, error, netState} = useFirebaseData(
    'pet name',
    language,
  );

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Object.keys(data).sort()}
          renderItem={({item, index}) => (
            <Details label={item.trim()} data={data[item].trim()} />
          )}
          //   contentContainerStyle={{gap: 16}}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
            />
          )}
          ListFooterComponent={() => (
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
            />
          )}
          ListEmptyComponent={() =>
            navigation.reset({
              index: 1,
              routes: [
                {
                  name: NAVIGATIONS.HOME_NAVIGATOR.name,
                },
                {name: NAVIGATIONS.CONTACT_NOTICE.name},
              ],
            })
          }
        />
      </SafeAreaView>
    </ErrorWrapper>
  );
};

export default PetName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed7d31',
    alignItems: 'center',
    // gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
