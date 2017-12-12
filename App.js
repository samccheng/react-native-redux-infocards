import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>info cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    fontSize: 20
  }
})
