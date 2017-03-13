import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputForm = (props) => {
  const { label, onChangeText, value, placeholder, secureTextEntry } = props;
  const { containerStyle, labelStyle, textInputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={textInputStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    marginLeft: 16,
    fontSize: 18,
    flex: 1
  },
  textInputStyle: {
    height: 48,
    flex: 2
  }
}

export { TextInputForm };
