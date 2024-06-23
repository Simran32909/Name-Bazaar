import {StyleSheet, FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../components/common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const MottoForEverything = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const curLanguage = i18n.language;
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;
  const {data, loading, error, netState} = useFirebaseData(
    'motto for everything',
    language,
  );

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Object.keys(data).sort()}
          renderItem={({item, index}) => {
            // console.log('item:', item);
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() =>
                  navigation.navigate(NAVIGATIONS.MOTTO_SCREEN.name, {
                    name: item,
                    data: data[item],
                  })
                }>
                <CustomText text={item} fontColor={'white'} size={32} />
              </TouchableWithoutFeedback>
            );
          }}
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

export default MottoForEverything;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed7d31',
    // alignItems: 'center',
    // gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
