import {
  Modal,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from './common/CustomText';
import CustomButton from './common/CustomButton';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';
import LoadingScreen from '../screens/LoadingScreen';

export default function ChangeLangModal({isVisible, setVisibility}) {
  const {t, i18n} = useTranslation();

  const [loading, setLoading] = useState(false);

  async function changeLang(language) {
    await i18n.changeLanguage(language);
    setLoading(false);
    setVisibility(false);
  }

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => setVisibility(false)}
      transparent={true}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.logo}>
            <CustomText
              text={t('Name Bazaar')}
              fontColor="white"
              size={25}
              fontStyle="italic"
            />
          </View>
          <CustomButton
            text={LANGUAGES.HINDI.text}
            handlePress={() => {
              setLoading(true);
              changeLang(LANGUAGES.HINDI.key);
              console.log('selected hindi');
            }}
            textColor="#2196F3"
            btnColor="white"
            style={styles.button}
            textSize={20}
          />
          <CustomButton
            text={LANGUAGES.ENGLISH.text}
            handlePress={() => {
              setLoading(true);
              changeLang(LANGUAGES.ENGLISH.key);
              console.log('selected english');
            }}
            textColor="#2196F3"
            btnColor="white"
            style={styles.button}
            textSize={20}
          />
        </SafeAreaView>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    gap: 20,
  },
  logo: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    borderColor: '#2196F3',
    borderWidth: 1,
  },
});

{
  /* <View
        style={{
          flex: 1,
          //   flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'yellow',
          }}>
          <CustomText text={'HI'} />
        </View>
      </View> */
}

//   mainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   container: {
//     backgroundColor: 'yellow',
//     marginVertical: '25%',
//     marginHorizontal: '25%',
//   },
