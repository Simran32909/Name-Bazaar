import {Image, Linking, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import useFirebaseData from '../hooks/useFirebaseData';
import {LANGUAGES} from '../constants/consts';
import ErrorWrapper from '../components/ErrorWrapper';
import Details from '../components/Details';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import {getDownloadURL, listAll, ref} from 'firebase/storage';
import {storage} from '../firebase/firebase';
import CustomButton from '../components/common/CustomButton';

const DailyUpdates = () => {
  const {t, i18n} = useTranslation();
  const curLanguage = i18n.language;
  const [imageList, setImageList] = useState([]);
  const [documentList, setDocumentsList] = useState([]);
  const {data, loading, error, netState} = useFirebaseData(
    'data',
    'Daily Updates',
  );

  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  const imagesListRef = ref(storage, 'Daily Updates/images/');
  const documentListRef = ref(storage, 'Daily Updates/documents/');

  useEffect(() => {
    listAll(imagesListRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setImageList(prev => [...prev, url]);
        });
      });
    });

    listAll(documentListRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setDocumentsList(prev => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <ErrorWrapper loading={loading} error={error} netState={netState}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            gap: 45,
          }}>
          {Object.keys(data).length != 0 &&
            Object.keys(data[language])
              .sort()
              .map((item, index) => (
                <Details
                  key={index}
                  label={item.slice(2).trim()}
                  labelSize={28}
                  data={data[language][item]}
                />
              ))}
          {imageList.map((url, index) => {
            return (
              <Image
                key={index}
                source={{uri: url}}
                style={{
                  width: 400,
                  height: 400,
                  resizeMode: 'contain',
                }}
              />
            );
          })}
          {documentList.map((url, index) => {
            return (
              <CustomButton
                key={index}
                text={'Open PDF ' + (index + 1)}
                handlePress={() => Linking.openURL(url)}
                btnColor={'white'}
                textColor={'#2196F3'}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </ErrorWrapper>
  );
};

export default DailyUpdates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    // justifyContent: 'center',
    // gap: 20,
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
