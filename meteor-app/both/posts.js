Posts = new Mongo.Collection('posts');
UserList = new Mongo.Collection('userList');

Meteor.methods({
  'addPost': function() {
    Posts.insert({
      title: "Post " + Random.id(),
      userId: this.userId
    });

    // console.log('emails', Meteor.user().emails);
    // console.log('emails[0]', Meteor.user().emails[0].address);
  },

  'addToUserList': function() {
    console.log('straight Up this', this);
    console.log('user', Meteor.user().emails[0].address);
    UserList.insert({
      userId: this.userId,
      email: Meteor.user().emails[0].address
    });

  },

  'deletePost': function() {
    let post = Posts.findOne();
    if (post) {
      Posts.remove({_id: post._id});
    }
  },

  'toggleRed': function() {
    console.log('attempting to toggle red light from meteor method');

  },

  'toggleGreen': function() {
    console.log('attempting to toggle green light from meteor method');
  },

  'toggleTest': function(num) {
    console.log('test function from posts.js, count: ', num);
  },

  toggleFunction: function(testBool) {
    console.log('test togglefunction_2 from posts.js');
    if (testBool) {
      console.log('argument passed');
    }
  }
})
