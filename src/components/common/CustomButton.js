import {StyleSheet, Pressable} from 'react-native';
import CustomText from './CustomText';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default function CustomButton({
  text,
  handlePress,
  textColor,
  textSize,
  fontWeight,
  btnColor,
  style,
}) {
  return (
    <Pressable
      style={[styles.btn, {backgroundColor: btnColor}, {...style}]}
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
  style: PropTypes.object,
};

CustomButton.defaultProps = {
  text: '',
  handlePress: () => {},
  textColor: 'white',
  textSize: moderateScale(16),
  fontWeight: 400,
  btnColor: '#2196F3',
  style: {},
};

const styles = StyleSheet.create({
  btn: {
    // alignSelf: 'flex-start',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
  },
});
