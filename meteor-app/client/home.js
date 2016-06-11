import { Accounts } from 'meteor/accounts-base';

Template.home.onCreated(function() {
  this.subscribe('posts');
  this.subscribe('userList');
})

Template.home.helpers({
  count() {
    return Posts.find().count();
  },
  posts() {
    // return Object.keys(Posts.find()._getRawObjects()._map);
    return Posts.find();
  },
  userList() {
    return UserList.find();
  }
})

Template.home.events({
  'click #increment': function(e) {
    e.preventDefault();

    Meteor.call('addPost');
    Meteor.call('toggleRed');

    // console.log('Posts...', Posts.find()._getRawObjects()._map);
    // console.log('Posts.find()', Posts.find());
    console.log('UserList', UserList.find()._getRawObjects()._map);
    console.log('Users', Meteor.users.find({}));
  },

  'click #decrement': function(e) {
    e.preventDefault();

    Meteor.call('deletePost');
    Meteor.call('toggleGreen');
  }
})
