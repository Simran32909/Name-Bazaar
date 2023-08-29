import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import NAKSHATRAS from '../constants/data/nameNakshatras';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';
import CustomText from '../components/common/CustomText';

export default function NakstrasScreen() {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  let namesData;

  if (curLanguage == LANGUAGES.HINDI.key)
    namesData = NAKSHATRAS[LANGUAGES.HINDI.label];
  else namesData = NAKSHATRAS[LANGUAGES.ENGLISH.label];

  return (
    <SafeAreaView>
      <FlatList
        // style={styles.listStyle}
        data={namesData}
        renderItem={({item}) => (
          <View style={styles.tile}>
            <CustomText text={item.label} size={50} fontColor={'white'} />
            <CustomText text={item.value} size={20} fontColor={'white'} />
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#2196F3',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    height: 200,
  },
});
