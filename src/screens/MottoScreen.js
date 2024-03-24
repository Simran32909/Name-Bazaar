import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../components/common/CustomText';
import Details from '../components/Details';

const MottoScreen = ({route}) => {
  const {data, name} = route.params;
  const {motto, ['आदर्श वाक्य']: mottoHindi, ...restOfData} = data;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          //   alignItems: 'center',
          gap: 25,
        }}
        style={{gap: 10}}>
        <View style={{alignSelf: 'center', gap: 5}}>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 2,
              padding: 10,
              //   alignSelf: 'center',
              // backgroundColor: 'white',
            }}>
            <CustomText
              text={
                motto
                  ? `${'"' + motto.trim() + '"'}`
                  : `${'"' + mottoHindi.trim() + '"'}`
              }
              fontColor="white"
              fontStyle={'italic'}
              size={32}
            />
          </View>
          <CustomText
            text={'- ' + name}
            fontColor={'white'}
            textAlignment={'right'}
            size={24}
            weight={'bold'}
            fontStyle={'italic'}
          />
        </View>
        <View style={{paddingHorizontal: 15}}>
          {Object.keys(restOfData).map((item, index) => (
            <Details key={index} label={item} data={restOfData[item]} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MottoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 20,
  },
});
