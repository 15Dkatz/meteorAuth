// import React, {
//   View,
//   Text,
//   Stylesheet
// } from 'react-native';

var React = require('react');
var {
  View,
  Text,
  StyleSheet
} = require('react-native');


import ddpClient from './ddp';
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';

module.exports = React.createClass({
  getInitialState() {
    return {
      connected: false,
      signedIn: false,
    }
  },

  componentDidMount() {
    ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({connected: connected});

    });
  },

  changedSignedIn(status = false) {
    this.setState({signedIn: status});
  },

  render() {
    let body;

    if (this.state.connected && this.state.signedIn) {
      body = <LoggedIn changedSignedIn={this.changedSignedIn}/>
    } else if (this.state.connected) {
      body = <LoggedOut changedSignedIn={this.changedSignedIn} />
    }

    return (
      <View style={styles.container}>
        <View style={styles.center}>
          {body}
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  center: {
    alignItems: 'center'
  }
});
