const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  img: {
    type: String
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      },
      content: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now
      },
    }
  ]
  
})

const Post = mongoose.model('post', postSchema)
module.exports = Post;