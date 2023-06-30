import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';

export default function DirectContact() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText text="Direct Contact" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
