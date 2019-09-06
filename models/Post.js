const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Comment = require('./Comment');
const postSchema = new Schema({
  username: {
    types: Schema.Types.ObjectId,
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
  comment: [Comment.schema],
  city: {
    type: String
  }
})

const Post = mongoose.model('post', postSchema)
module.exports = Post;