import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCTaI3PfVNRos4N-8zDxjxQSlKcY4gRsfs',
    authDomain: 'manager-300a4.firebaseapp.com',
    databaseURL: 'https://manager-300a4.firebaseio.com',
    projectId: 'manager-300a4',
    storageBucket: 'manager-300a4.appspot.com',
    messagingSenderId: '626815188064'
  }
  firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
    )
  }
}

export default App

// provider tab connects to connect tags and makes sure they can access store and grab redux state
// applyMiddleware allows us to use ReduxThunk middleware
// empty {} is optional
// applyMiddleware() is a store enhancer
