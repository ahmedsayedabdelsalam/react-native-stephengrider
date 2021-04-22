import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDnT2q9Rjkmcop6VlSz-NFLZo55AyeBFCI",
      authDomain: "auth-2df63.firebaseapp.com",
      projectId: "auth-2df63",
      storageBucket: "auth-2df63.appspot.com",
      messagingSenderId: "704925079404",
      appId: "1:704925079404:web:d71545b0ad15ab5d124549",
      measurementId: "G-8L0YMC1W6C"
    })
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;