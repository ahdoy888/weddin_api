const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Comment = require('./Comment');

const postSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  // comment: [Comment.schema],
  
})

const Post = mongoose.model('post', postSchema)
module.exports = Post;