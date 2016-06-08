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
  TouchableOpacity
} from 'react-native';

import simpleAuthClient from 'react-native-simple-auth';


class simpleAuth extends Component {

  componentDidMount() {
    // simpleAuthClient.configure({
    //   twitter: {
    //     consumer_key: '	L5ror2xynk13g24ICb8kVdK5l',
    //     consumer_secret: 'GnlMOSTG8qpMU8PEuYEpWqRzBumjkM9yXcw3KoetMDAHCzGSBL'
    //   }
    // }).then(() => {
    //   console.log("configured twitter");
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.twitterAuth}>
          <Text style={styles.welcome}>
            Test Auth with Twitter
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  twitterAuth() {
    console.log("attempting to log in with Twitter");

  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('simpleAuth', () => simpleAuth);
