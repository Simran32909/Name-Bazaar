import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import CustomButton from '../components/common/CustomButton';
import {LANGUAGES} from '../constants/consts';

export default function SelectLanguage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <CustomText
          text="Naam Bazaar"
          fontColor="white"
          size={25}
          fontStyle="italic"
        />
      </View>
      {/* <CustomText
        text="Welcome! Please Select a Language"
        // size={10}
        fontStyle="italic"
      /> */}
      <CustomButton
        text={LANGUAGES.ENGLISH.text}
        handlePress={() => {}}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
      <CustomButton
        text={LANGUAGES.HINDI.text}
        handlePress={() => {}}
        textColor="#2196F3"
        btnColor="white"
        style={styles.button}
        textSize={20}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 20,
  },
  logo: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    width: '50%',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
});
