import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, TextInputForm, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password, error } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      this.setState({ error: 'Authentication Failed', loading: false });
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    } else {
      return <Button text='Log In' callback={this.onButtonPress.bind(this)} />;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInputForm
            label='Email'
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder='user@gmail.com'
           />
        </CardSection>
        <CardSection>
          <TextInputForm
            secureTextEntry
            label='Password'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder='password'
           />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  };
}

const styles = {
  errorStyle: {
    color: '#ff0000',
    alignSelf: 'center',
    fontSize: 20
  }
}

export default LoginForm;
