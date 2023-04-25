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
            width: 100,
            height: 100,
          }}
        />
        <CustomText text={title} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    height: 200,
    width: 200,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
