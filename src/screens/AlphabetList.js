import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import hindiNames from '../constants/namesList';
import AlphabetTile from '../components/AlphabetTile';

export default function AlphabetList() {
  const hindiAlphabets = Object.keys(hindiNames);

  return (
    <SafeAreaView>
      <FlatList
        data={hindiAlphabets}
        renderItem={({item}) => (
          <AlphabetTile title={item} firstLetter={item} />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
