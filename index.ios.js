/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={STYLES.container}>
        <Text style={STYLES.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={STYLES.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={STYLES.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
