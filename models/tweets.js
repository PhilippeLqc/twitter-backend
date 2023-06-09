const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  date: Date,
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
  hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'hashtags'}]
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;