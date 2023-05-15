import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';

export default function Card({imgSrc, title, navigatePath}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('test')}
      style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={imgSrc}
          style={{
            width: 65,
            height: 65,
          }}
        />
        <CustomText text={title} size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    // height: 200,
    // width: '90%',
    // backgroundColor: '#2196F3',
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
