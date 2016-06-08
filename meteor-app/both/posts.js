Posts = new Mongo.Collection('posts');

Meteor.methods({
  'addPost': function() {
    console.log('userId', this.userId);
    Posts.insert({
      title: "Post " + Random.id(),
      userId: this.userId
    });
  },

  'deletePost': function() {
    let post = Posts.findOne();
    if (post) {
      Posts.remove({_id: post._id});
    }
  }
})
