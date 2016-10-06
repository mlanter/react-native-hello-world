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
});
