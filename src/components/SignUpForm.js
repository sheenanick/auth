import React, { Component } from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, TextInputForm, Spinner } from './common';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password, confirmPassword, error } = this.state;

    this.setState({ error: '' });

    if (email && password && confirmPassword) {
      if (password.length < 6) {
        this.setState({ error: 'Password must be at least 6 characters'})
      } else if (password === confirmPassword) {
        this.setState({ loading: true })
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((error) => {
            this.setState({ error: 'Email already exists', loading: false })
          });
      } else {
        this.setState({ error: 'Passwords do not match'})
      }
    } else {
      this.setState({ error: 'All fields are required'})
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    } else {
      return <Button text='Sign Up' callback={this.onButtonPress.bind(this)} />;
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
        <CardSection>
          <TextInputForm
            secureTextEntry
            label='Confirm Password'
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            placeholder='confirm password'
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

export default SignUpForm;
