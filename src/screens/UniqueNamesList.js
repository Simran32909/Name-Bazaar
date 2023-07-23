import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, FlatList, TextInput} from 'react-native';
import {getUniqueNamesData} from '../utils/getNamesData';
import {LANGUAGES} from '../constants/consts';
import NameTile from '../components/NameTile';
import {useEffect, useState} from 'react';
import Fuse from 'fuse.js';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';

export default function UniqueNamesList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();

  const selectedData = getUniqueNamesData(selection);

  const curLanguage = i18n.language;
  let namesData;
  if (curLanguage == LANGUAGES.HINDI.key)
    namesData = selectedData[LANGUAGES.HINDI.label];
  else namesData = selectedData[LANGUAGES.ENGLISH.label];

  const [result, setResult] = useState([...namesData]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    // console.log(searchString);
    const res = fuse.search(searchString).map(r => r.item);

    if (searchString == '') setResult([...namesData]);
    else setResult(res);
    // console.log('res:', res);
  }, [searchString]);

  const options = {
    findAllMatches: false,
    shouldSort: true,
    threshold: 0.2,
  };

  const fuse = new Fuse(namesData, options);

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
        renderItem={({item}) => <NameTile data={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingTop: verticalScale(16)},
  searchBox: {
    color: 'black',
    padding: 0,
    margin: 0,
    fontSize: moderateScale(30),
    paddingHorizontal: horizontalScale(12),
    marginBottom: verticalScale(16),
    width: '90%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: moderateScale(1),
  },
  listStyle: {
    width: '100%',
  },
});
