import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
