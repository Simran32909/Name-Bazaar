import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Test() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{color: 'black'}}>Test</Text>
    </View>
  );
}
