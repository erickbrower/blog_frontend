var Actions = require('tuxx/Actions');

var postActions = Actions.createActionCategory({
	category: 'posts',
	source: 'post views',
	actions: ['list', 'show', 'new', 'create', 'destroy']
});

module.exports = postActions;