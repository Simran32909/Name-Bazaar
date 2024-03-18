import {SafeAreaView, ActivityIndicator} from 'react-native';
import CustomText from './common/CustomText';
import {useTranslation} from 'react-i18next';

const ErrorWrapper = ({children, loading, error, netState}) => {
  const {t, i18n} = useTranslation();

  if (netState.isConnected != null && !netState.isConnected) {
    // console.log('line 77: ', netState.isConnected);
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CustomText text={t('No Internet')} size={18} fontColor="black" />
      </SafeAreaView>
    );
  }

  if (loading)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={50} />
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView>
        <CustomText text={error} fontColor="black" size={16} />
      </SafeAreaView>
    );
  return children;
};

export default ErrorWrapper;
