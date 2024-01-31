import {SafeAreaView, StyleSheet, FlatList, TextInput} from 'react-native';
import NameTile from '../components/NameTile';
import {useEffect, useState} from 'react';
import Fuse from 'fuse.js';
import useFirebaseData from '../hooks/useFirebaseData';
import {useTranslation} from 'react-i18next';
import {LANGUAGES, SELECTIONS} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';

export default function UniqueNamesList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();

  const [result, setResult] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [searchData, setSearchData] = useState([]);

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

  useEffect(() => {
    const res = fuse.search(searchString).map(r => r.item);

    if (searchString == '') setResult(searchData);
    else setResult(res);
  }, [searchString]);

  useEffect(() => {
    let obj = [];
    if (data) {
      Object.keys(data).forEach(alpha => {
        if (data[alpha]) obj = [...obj, ...Object.keys(data[alpha])];
      });
      obj.sort();
    }
    setSearchData(obj);
  }, [data]);

  useEffect(() => {
    setResult(searchData);
  }, [searchData]);

  const options = {
    findAllMatches: false,
    shouldSort: true,
    threshold: 0.2,
  };

  const fuse = new Fuse(searchData, options);

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
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
          renderItem={({item}) => {
            if (!data || !data[item[0]] || !data[item[0]][item]) return null;

            return <NameTile nameData={data[item[0]][item]} name={item} />;
          }}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </ErrorWrapper>
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
