import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';

export default function LoadingScreen() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <CustomText
          text={t('Naam Bazaar')}
          fontColor="white"
          size={25}
          fontStyle="italic"
        />
      </View>
      <ActivityIndicator size="large" color="#2196F3" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    backgroundColor: 'white',
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
});