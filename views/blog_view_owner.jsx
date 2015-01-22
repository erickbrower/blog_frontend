var React = require('tuxx/React'),
  postActions = require('./actions/post_actions'),
  postStore = require('./stores/post_store');

var BlogViewOwner = React.createOwnerClass({
  getInitialState: function() {
    return {
      posts: postStore.getAll();
    };
  },
  connectOwnerToStore: function() {
    return {
      store: postStore,
      listener: function() {
        this.setState({ posts: postStore.getAll() });
      }.bind(this)
    };
  }
});

module.exports = BlogViewOwner;