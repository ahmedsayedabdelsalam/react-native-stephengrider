import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Header, Spinner} from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDnT2q9Rjkmcop6VlSz-NFLZo55AyeBFCI",
      authDomain: "auth-2df63.firebaseapp.com",
      projectId: "auth-2df63",
      storageBucket: "auth-2df63.appspot.com",
      messagingSenderId: "704925079404",
      appId: "1:704925079404:web:d71545b0ad15ab5d124549",
      measurementId: "G-8L0YMC1W6C"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;