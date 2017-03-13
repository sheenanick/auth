import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({callback, text}) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={callback} style={buttonStyle}>
      <Text style={textStyle}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderWidth: 1
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    padding: 16,
    color: '#000'
  }
}

export default Button;
