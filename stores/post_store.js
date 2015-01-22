var ActionStores = require('tuxx/Stores/ActionStores');

var postStore = ActionStores.createStore({
	//Hardcoded data for now
	_posts: [{
		id: 1,
		title: "This is a test post",
		slug: "this-is-a-test-post",
		body: "Test test test testing",
		created_at: "January 26th, 2015 3:04pm"
	}, {
		id: 2,
		title: "This is another test post",
		slug: "this-is-another-test-post",
		body: "Test test test testing",
		created_at: "January 26th, 2015 3:06pm"
	}],

	getAll: function() {
		return this._posts;
	},

	onAdd: function(post) {
		this._posts.push({
      id: this._posts.length,
      title: post.title,
      slug: post.slug,
      body: post.body,
      created_at: post.created_at
    });
    this.emitChange();
	},

  onRemove: function(todo) {
    var posts = this._posts, 
      postsLength = this._posts.length, i;
      for (i = 0; i < postsLength; i++) {
        if(posts[i] === post) {
          delete posts[i];
          break;
        }
      }
      this.emitChange();
  }
});

module.exports = postStore;