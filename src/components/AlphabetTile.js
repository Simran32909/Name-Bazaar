import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function AlphabetTile({title, firstLetter}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(NAVIGATIONS.NAMES_LIST.name, {
          firstLetter: firstLetter,
        })
      }>
      <View style={styles.container}>
        <CustomText text={title} size={40} fontColor="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#2196F3',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    height: 200,
  },
});
