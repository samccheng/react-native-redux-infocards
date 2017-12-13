import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import CardList from './src/components/CardList'

const store = createStore(reducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header title="info cards"/>
          <CardList />
        </View>
      </Provider>
    );
  }
}
