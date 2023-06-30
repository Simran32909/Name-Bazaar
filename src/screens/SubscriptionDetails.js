import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';

export default function SubscriptionDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText text="subscription details" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
