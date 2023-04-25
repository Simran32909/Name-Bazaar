import {StyleSheet, Pressable} from 'react-native';
import CustomText from './CustomText';
import PropTypes from 'prop-types';

export default function CustomButton({
  text,
  handlePress,
  textColor,
  textSize,
  fontWeight,
  btnColor,
}) {
  return (
    <Pressable
      style={[styles.btn, {backgroundColor: btnColor}]}
      onPress={handlePress}>
      <CustomText
        text={text}
        fontColor={textColor}
        size={textSize}
        textAlignment="center"
        weight={fontWeight}
      />
    </Pressable>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string,
  handlePress: PropTypes.func,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  fontWeight: PropTypes.number,
  btnColor: PropTypes.string,
};

CustomButton.defaultProps = {
  text: '',
  handlePress: () => {},
  textColor: 'white',
  textSize: 16,
  fontWeight: 400,
  btnColor: '#2196F3',
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
