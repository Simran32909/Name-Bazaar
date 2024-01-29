import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import NameTile from '../components/NameTile';
import {useEffect, useState} from 'react';
import Fuse from 'fuse.js';
import useFirebaseData from '../hooks/useFirebaseData';
import {useTranslation} from 'react-i18next';
import CustomText from '../components/common/CustomText';
import {LANGUAGES, SELECTIONS} from '../constants/consts';

export default function UniqueNamesList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();

  const curLanguage = i18n.language;
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  let document;
  if (selection == SELECTIONS.BOY) document = 'boys' + ' ' + language;
  else if (selection == SELECTIONS.GIRL) document = 'girls' + ' ' + language;

  const {data, loading, error, netState} = useFirebaseData(
    'unique names',
    document,
  );

  const [result, setResult] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const res = fuse.search(searchString).map(r => r.item);

    if (searchString == '') setResult([...data]);
    else setResult(res);
  }, [searchString]);

  useEffect(() => {
    setResult([...data.sort()]);
  }, [data]);

  const options = {
    findAllMatches: false,
    shouldSort: true,
    threshold: 0.2,
  };

  const fuse = new Fuse(data, options);

  if (!netState.isConnected) {
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
      <TextInput
        style={styles.searchBox}
        onChangeText={val => setSearchString(val)}
        value={searchString}
        placeholder={t('Search Name')}
        placeholderTextColor="#a69f9f"
      />
      <FlatList
        style={styles.listStyle}
        data={result}
        renderItem={({item}) => <NameTile name={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingTop: 16},
  searchBox: {
    color: 'black',
    padding: 0,
    margin: 0,
    fontSize: 30,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '90%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  listStyle: {
    width: '100%',
  },
});
