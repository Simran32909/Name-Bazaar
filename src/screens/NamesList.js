import {View, FlatList} from 'react-native';
import React from 'react';
import NameTile from '../components/NameTile';

export default function NamesList({route}) {
  const {names} = route.params;

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
