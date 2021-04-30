import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import {SafeAreaView} from 'react-native'
import ReduxThunk from 'redux-thunk'

export class App extends Component {
  UNSAFE_componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDIzUrT50ei9cTH1JUkGtoNXC488asvN_k",
      authDomain: "manager-7d01f.firebaseapp.com",
      projectId: "manager-7d01f",
      storageBucket: "manager-7d01f.appspot.com",
      messagingSenderId: "966280580964",
      appId: "1:966280580964:web:9890fdc90a4489a581b471"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App
