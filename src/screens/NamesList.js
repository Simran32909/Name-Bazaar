import {View, FlatList} from 'react-native';
import React from 'react';
import NameTile from '../components/NameTile';

export default function NamesList({route}) {
  const {namesObj} = route.params;

  //since names is an object therefore we need its keys which is an array to render the flatlist
  const nameKeys = Object.keys(namesObj).sort();

  // data coming here is of the form
  // {
  //  "arjun" : {
  //     meaning : "",
  //     etymology: '',
  //     zodiac: '',
  //     horoscope: '',
  //     'famous personalities': '',
  //   },
  // }

  return (
    <View>
      <FlatList
        data={nameKeys}
        renderItem={({item}) => (
          <NameTile nameData={namesObj[item]} name={item} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
