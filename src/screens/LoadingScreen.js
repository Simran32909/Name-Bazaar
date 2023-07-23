import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CustomText from '../components/common/CustomText';
import {useTranslation} from 'react-i18next';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';

export default function LoadingScreen() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <CustomText
          text={t('Name Bazaar')}
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
    gap: verticalScale(15),
    backgroundColor: 'white',
  },
  logo: {
    backgroundColor: '#2196F3',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
