import {View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import React from 'react';
import hindiNames from '../constants/namesList';
import NameTile from '../components/NameTile';

export default function NamesList({route}) {
  const {firstLetter} = route.params;
  const names = hindiNames[firstLetter];
  //   console.log(names);
  return (
    <View>
      <FlatList
        data={names}
        renderItem={({item}) => <NameTile data={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
