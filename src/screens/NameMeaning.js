import {View} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';

export default function NameMeaning({route}) {
  const {data} = route.params;
  return (
    <View>
      <View>
        <CustomText text="Name: " />
        <CustomText text={data.name} />
      </View>
      <View>
        <CustomText text="Meaning: " />
        <CustomText text={data.meaning} />
      </View>
    </View>
  );
}
