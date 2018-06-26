/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Nav from './route';
import { AppNavigator } from './reduxRoute';
import { store } from './allStore';
export const number = 123;
class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <Nav />
      </Provider>

    );
  }
}
export default App;