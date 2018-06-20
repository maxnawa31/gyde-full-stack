const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/gyde', {
  keepAlive: true
});

module.exports.User = require('./user');
module.exports.Post = require('./post');
