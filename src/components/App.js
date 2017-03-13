import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './common';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtrkq_ZwbgsT-EH43ahD6IKTEeuXHIO1o',
      authDomain: 'react-native-auth-397c0.firebaseapp.com',
      databaseURL: 'https://react-native-auth-397c0.firebaseio.com',
      storageBucket: 'react-native-auth-397c0.appspot.com',
      messagingSenderId: '64582402186'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button text='Log Out' callback={() => firebase.auth().signOut()} />
          </CardSection>

        );
      case false:
        return (
          <View>
            <LoginForm />
            <SignUpForm />
          </View>
        );
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
};

export default App;
