import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
class App extends Component {
  componentWillMount() {
    var config = {
    apiKey: "AIzaSyCTaI3PfVNRos4N-8zDxjxQSlKcY4gRsfs",
    authDomain: "manager-300a4.firebaseapp.com",
    databaseURL: "https://manager-300a4.firebaseio.com",
    projectId: "manager-300a4",
    storageBucket: "manager-300a4.appspot.com",
    messagingSenderId: "626815188064"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>
          Hello
        </Text>
      </View>
    </Provider>
    )
  }
}

export default App

// provider tab connects to connect tags and makes sure they can access store and grab redux state