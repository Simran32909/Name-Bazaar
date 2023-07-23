import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {SELECTIONS} from '../constants/consts';
import icons from '../constants/icons';
import {useTranslation} from 'react-i18next';
import NAVIGATIONS from '../constants/navigationConstants';
import {horizontalScale, verticalScale} from '../utils/metrics';

export default function UniqueNamesScreen() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Card
        imgSrc={icons.boy}
        title={t(SELECTIONS.BOY)}
        selection={SELECTIONS.BOY}
        toPath={NAVIGATIONS.UNIQUE_NAMES_LIST.name}
      />
      <Card
        imgSrc={icons.girl}
        title={t(SELECTIONS.GIRL)}
        selection={SELECTIONS.GIRL}
        toPath={NAVIGATIONS.UNIQUE_NAMES_LIST.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(10),
    backgroundColor: 'white',
    rowGap: verticalScale(15),
    marginTop: verticalScale(20),
  },
});
