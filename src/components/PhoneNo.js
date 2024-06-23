import {View, Pressable, Linking, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import icons from '../constants/icons';
import CustomText from './common/CustomText';

const PhoneNo = ({number}) => (
  <View style={styles.phoneBox}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ed7d31',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        gap: 5,
      }}>
      <CustomText
        text="Click Here"
        size={20}
        fontColor="white"
        letterSpacing={0.7}
        fontFamily="sans-serif-light"
      />
      <Feather name="arrow-right-circle" color="white" size={22} />
    </View>
    <Pressable
      style={styles.phoneNo}
      onPress={() => {
        Linking.openURL('whatsapp://send?text=' + `&phone=91${number}`)
          .then(() => {
            console.log('WhatsApp Opened for ' + `${number}`);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      }}>
      <Image
        source={icons.whatsapp}
        style={{
          width: 35,
          height: 35,
        }}
      />
      <CustomText
        text={number}
        size={20}
        letterSpacing={0.5}
        fontFamily="sans-serif-medium"
      />
    </Pressable>
  </View>
);

export default PhoneNo;

const styles = StyleSheet.create({
  phoneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneNo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
