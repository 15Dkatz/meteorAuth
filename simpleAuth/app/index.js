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


import Button from './button';
import DDPClient from 'ddp-client';
let ddpClient = new DDPClient();


module.exports = React.createClass({
  getInitialState() {
    return {
      connected: false,
      posts: {}
    }
  },

  componentDidMount() {
    ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({connected: connected});
      this.makeSubscription();
      this.observePosts();
    });
  },

  makeSubscription() {
    ddpClient.subscribe("posts", [], () => {
      this.setState({posts: ddpClient.collections.posts});
    })
  },

  observePosts() {
    let observer = ddpClient.observe("posts");

    console.log(observer, "observer");
    observer.added = (id) => {
      this.setState({posts: ddpClient.collections.posts})
      console.log("ddpClient.collections.posts length: ", ddpClient.collections.posts);
    }

    observer.changed = (id, oldFields, clearedFields, newFields) => {
      this.setState({posts: ddpClient.collections.posts})
    }
    //
    observer.removed = (id, oldValue) => {
      this.setState({posts: ddpClient.collections.posts})
    }

  },

  handleIncrement() {
    console.log('inc');
    ddpClient.call('addPost');
  },

  handleDecrement() {
    console.log('dec');
    ddpClient.call('deletePost');
  },

  render() {
    let count = 10;
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text>Posts: {Object.keys(this.state.posts).length}</Text>
          <Button text="Increment" onPress={this.handleIncrement}/>
          <Button text="Decrement" onPress={this.handleDecrement}/>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
    alignItems: 'center'
  }
});
