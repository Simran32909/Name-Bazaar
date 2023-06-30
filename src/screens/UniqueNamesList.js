import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {getUniqueNamesData} from '../utils/getNamesData';
import {LANGUAGES} from '../constants/consts';
import NameTile from '../components/NameTile';

export default function UniqueNamesList({route}) {
  const {selection} = route.params;
  const {t, i18n} = useTranslation();

  const selectedData = getUniqueNamesData(selection);

  const curLanguage = i18n.language;
  let namesData;
  if (curLanguage == LANGUAGES.HINDI.key)
    namesData = selectedData[LANGUAGES.HINDI.label];
  else namesData = selectedData[LANGUAGES.ENGLISH.label];

  return (
    <SafeAreaView>
      <FlatList
        data={namesData}
        renderItem={({item}) => <NameTile data={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
