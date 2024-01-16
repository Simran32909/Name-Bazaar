import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AlphabetTile from '../components/AlphabetTile';
import useFirebaseData from '../hooks/useFirebaseData';
import CustomText from '../components/common/CustomText';

export default function AlphabetList({route}) {
  const {selection} = route.params;
  const {data, loading, error} = useFirebaseData(selection);

  const alphabetsList = Object.keys(data).sort();

  if (loading)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={50} />
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView>
        <CustomText text={error} fontColor="black" size={16} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <FlatList
        data={alphabetsList}
        renderItem={({item}) => <AlphabetTile text={item} data={data[item]} />}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
