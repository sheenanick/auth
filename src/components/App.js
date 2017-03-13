import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';

const App = () => {
  return (
    <View>
      <Header headerText='Authentication' />
      <Text>My App!</Text>
    </View>
  );
};

export default App;
