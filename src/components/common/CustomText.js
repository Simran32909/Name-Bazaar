import {Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function CustomText({
  text,
  size,
  fontColor,
  weight,
  textAlignment,
  fontStyle,
  letterSpacing,
  fontFamily,
  customStyle,
  includeFontPadding,
}) {
  return (
    <Text
      style={{
        color: 'black',
        fontSize: size,
        color: fontColor,
        fontWeight: weight,
        textAlign: textAlignment,
        fontStyle: fontStyle,
        letterSpacing: letterSpacing,
        fontFamily: fontFamily,
        includeFontPadding: includeFontPadding,
        ...customStyle,
      }}>
      {text}
    </Text>
  );
}

CustomText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  fontColor: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlignment: PropTypes.string,
  fontStyle: PropTypes.string,
  letterSpacing: PropTypes.number,
  fontFamily: PropTypes.string,
  customStyle: PropTypes.object,
  includeFontPadding: PropTypes.bool,
};

CustomText.defaultProps = {
  text: 'text',
  size: 16,
  fontColor: 'black',
  weight: 400,
  textAlignment: 'left',
  fontStyle: 'normal',
  letterSpacing: 0,
  fontFamily: 'normal',
  customStyle: {},
  includeFontPadding: true,
};
