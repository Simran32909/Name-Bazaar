import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function AlphabetTile({text, data}) {
  const navigation = useNavigation();

  const navigateTo =
    data && Object.keys(data).length != 0
      ? NAVIGATIONS.NAMES_LIST.name
      : NAVIGATIONS.CONTACT_NOTICE.name;

  // data coming here is of the form
  // {
  //  "arjun" : {
  //     name : "",
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': '',
  //   },
  // }

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(navigateTo, {
          namesObj: data,
        })
      }>
      <View style={styles.container}>
        <CustomText text={text} size={40} fontColor="white" />
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
