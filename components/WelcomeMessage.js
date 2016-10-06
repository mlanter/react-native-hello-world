/**
 * @providesModule WelcomeMessage
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <View style={STYLES.container}>
        <Text style={STYLES.welcome}>
          Hello, World!
        </Text>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
