import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import hindiNames from '../constants/namesList';
import AlphabetTile from '../components/AlphabetTile';
import getNamesData from '../utils/getNamesData';

export default function AlphabetList({route}) {
  const {selection} = route.params;
  const selectedData = getNamesData(selection);
  const namesData = selectedData.hindi;
  const alphabetsList = Object.keys(namesData);

  return (
    <SafeAreaView>
      <FlatList
        data={alphabetsList}
        renderItem={({item}) => (
          <AlphabetTile text={item} data={namesData[item]} />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
