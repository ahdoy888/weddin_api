const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;