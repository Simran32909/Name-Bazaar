import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText text="Privacy Policy" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
