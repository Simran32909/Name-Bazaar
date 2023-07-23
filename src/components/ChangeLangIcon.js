import {Modal, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChangeLangModal from './ChangeLangModal';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {horizontalScale} from '../utils/metrics';

export default function ChangeLangIcon() {
  const [isVisible, setVisibility] = useState(false);
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => setVisibility(true)}>
      <Icon name="language" size={28} color="white" />
      {isVisible && (
        <ChangeLangModal isVisible={isVisible} setVisibility={setVisibility} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {paddingRight: horizontalScale(10)},
});
