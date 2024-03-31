import {StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';

export default function Card({
  imgSrc,
  title,
  selection,
  toPath = NAVIGATIONS.ALPHABET_LIST.name,
  collectionName = '',
}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(toPath, {
          selection: selection,
          collectionName: collectionName,
        })
      }
      style={
        imgSrc
          ? {
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              ...styles.container,
            }
          : styles.container
      }>
      {imgSrc && (
        <Image
          source={imgSrc}
          style={{
            width: 65,
            height: 65,
          }}
        />
      )}
      <CustomText
        text={title}
        size={20}
        fontColor="white"
        customStyle={{flex: 1, flexWrap: 'wrap'}}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  // cardContainer: {
  //   backgroundColor: '#2196F3',
  //   flexDirection: 'row',
  //   borderWidth: StyleSheet.hairlineWidth,
  //   borderColor: 'grey',
  //   borderRadius: 7,
  //   paddingVertical: 7,
  //   paddingHorizontal: 10,
  //   alignItems: 'center',
  //   gap: 15,
  // },
});
