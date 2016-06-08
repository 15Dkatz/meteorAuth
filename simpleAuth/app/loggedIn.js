var React = require('react');
var {
  View,
  Text
} = require('react-native');

import Button from './button';

import ddpClient from './ddp';


module.exports = React.createClass({
  getInitialState() {
    return {
      posts: {},
      userId: ''
    }
  },

  componentDidMount() {
    this.makeSubscription();
    this.observePosts();
  },

  observePosts() {
    let observer = ddpClient.observe("posts");
    observer.added = (id) => {
      this.setState({posts: ddpClient.collections.posts})
    }
    observer.changed = (id, oldFields, clearedFields, newFields) => {
      this.setState({posts: ddpClient.collections.posts})
    }
    observer.removed = (id, oldValue) => {
      this.setState({posts: ddpClient.collections.posts})
    }
  },

  makeSubscription() {
    ddpClient.subscribe("posts", [], () => {
      this.setState({posts: ddpClient.collections.posts});
    })
  },

  handleIncrement() {
    console.log('inc');
    ddpClient.call('addPost');
  },

  handleDecrement() {
    console.log('dec');
    ddpClient.call('deletePost');
  },

  handleSignOut() {
    console.log("attempting to sign out in loggedIn.js");
    ddpClient.logout(()=> {
      this.props.changedSignedIn(false)
    });
  },

  render() {
    let count = Object.keys(this.state.posts).length;
    return (
      <View>
        <View>
          <Text>UserId: {this.state.userId}</Text>
          <Text>Posts: {count}</Text>
          <Button text="Increment" onPress={this.handleIncrement}/>
          <Button text="Decrement" onPress={this.handleDecrement}/>

          <Button text="Sign Out" onPress={this.handleSignOut}/>
        </View>
      </View>
    )
  }
})
