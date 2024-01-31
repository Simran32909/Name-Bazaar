import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import CustomText from './common/CustomText';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '../constants/navigationConstants';
import {memo} from 'react';

const NameTile = ({nameData}) => {
  const navigation = useNavigation();

  // data coming here is of the form
  // {
  //     name : "",
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': '',
  // },

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // to show contact us screen when you click on unique names
        // if (nameData.meaning)
        //   navigation.navigate(NAVIGATIONS.NAMES_MEANING.name, {nameData});
        // else navigation.navigate(NAVIGATIONS.CONTACT_NOTICE.name);
        navigation.navigate(NAVIGATIONS.NAMES_MEANING.name, {nameData});
      }}>
      <View style={styles.container}>
        <CustomText text={nameData.name} size={40} fontColor="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 12,
  },
});

export default memo(NameTile);
