import {View, Text, FlatList} from 'react-native';
import React from 'react';
import hindiNames from '../constants/namesList';
import AlphabetTile from '../components/AlphabetTile';

export default function AlphabetList() {
  //   const englishAlphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z];
  const hindiAlphabets = Object.keys(hindiNames);

  return (
    <View>
      <FlatList
        data={hindiAlphabets}
        renderItem={({item}) => (
          <AlphabetTile title={item} firstLetter={item} />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
