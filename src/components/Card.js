import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function Card({imgSrc, title, navigatePath}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(NAVIGATIONS.ALPHABET_LIST.name)}
      style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={imgSrc}
          style={{
            width: 65,
            height: 65,
          }}
        />
        <CustomText text={title} size={20} fontColor="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 15,
  },
});
