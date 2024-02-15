import {View, Text} from 'react-native';
import React from 'react';
import CustomText from './common/CustomText';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../constants/consts';

const Details = ({
  label,
  data,
  isFirstLetterCapital = true,
  customStyle = {},
  isDataArray = false,
}) => {
  const {t, i18n} = useTranslation();
  const curLang = i18n.language;

  const captiliseFirstLetter = label => {
    if (curLang == LANGUAGES.ENGLISH.key)
      return label.charAt(0).toUpperCase() + label.slice(1);
    else return label;
  };

  const labelWithColon = label + ':';

  return (
    <View
      style={{
        ...customStyle,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
      <CustomText
        text={
          isFirstLetterCapital
            ? captiliseFirstLetter(labelWithColon)
            : labelWithColon
        }
        fontColor="white"
        size={35}
        weight="bold"
      />
      {isDataArray ? (
        <View style={{width: '100%'}}>
          {data.map((val, index) => (
            <CustomText
              key={index}
              text={val}
              fontColor="white"
              size={28}
              textAlignment="justify"
            />
          ))}
        </View>
      ) : (
        <CustomText
          text={data}
          fontColor="white"
          size={28}
          textAlignment="justify"
        />
      )}
    </View>
  );
};

export default Details;
