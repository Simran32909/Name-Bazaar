import {View, FlatList} from 'react-native';
import React from 'react';
import NameTile from '../components/NameTile';

export default function NamesList({route}) {
  const {names} = route.params;

  //since names is an object therefore we need its keys which is an array to render the flatlist
  const nameKeys = Object.keys(names).sort();
  return (
    <View>
      <FlatList
        data={nameKeys}
        renderItem={({item}) => <NameTile name={item} meaning={names[item]} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
