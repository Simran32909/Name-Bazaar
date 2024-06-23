import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import {horizontalScale} from '../utils/metrics';
import icons from '../constants/icons';

export default function LoadingScreen() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        text={`${'Welcome\nto'}`}
        size={32}
        weight={'bold'}
        textAlignment={'center'}
        fontColor={'#ed7d31'}
        fontFamily={'cursive'}
      />
      <View style={styles.logo}>
        <CustomText
          text={t('Name Bazaar')}
          fontColor="white"
          size={30}
          weight={700}
          fontStyle="italic"
        />
      </View>
      <Image
        source={icons.namaste}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <ActivityIndicator size="large" color="#ed7d31" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'white',
  },
  logo: {
    backgroundColor: '#ed7d31',
    paddingHorizontal: horizontalScale(60),
    // width: '90%',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
