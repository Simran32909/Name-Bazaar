import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function NameTile({data}) {
  const navigation = useNavigation();

  // since data from unique names is a string and from normal selection is a object
  const name = data.name || data;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (data.name)
          navigation.navigate(NAVIGATIONS.NAMES_MEANING.name, {data: data});
        else navigation.navigate(NAVIGATIONS.CONTACT_NOTICE.name);
      }}>
      <View style={styles.container}>
        <CustomText text={name} size={40} fontColor="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    // backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 12,
    // height: 200,
  },
});
