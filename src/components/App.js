import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './common';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtrkq_ZwbgsT-EH43ahD6IKTEeuXHIO1o',
      authDomain: 'react-native-auth-397c0.firebaseapp.com',
      databaseURL: 'https://react-native-auth-397c0.firebaseio.com',
      storageBucket: 'react-native-auth-397c0.appspot.com',
      messagingSenderId: '64582402186'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
        <SignUpForm />
      </View>
    );
  }
};

export default App;
