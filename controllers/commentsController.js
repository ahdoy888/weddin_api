const db = require('../models');



const create = (req, res) => {
  const { postId } = req.params;
  const { userId, content } = req.body
  db.Post.findById(postId, function(err, post){
    if (err) return res.status(400).json({status: 400, message: "please try again..."});
    post.comments.push({
      userId, 
      content,
      postId
    })
    post.save(function(err, updatedPost){
      if (err) return res.status(400).json({status: 400, message: "please try again..."});

      res.status(201).json({status: 201, data: updatedPost});
    })
  });
};


const deleteComment = (req, res) => {
  const { postId, commentId } = req.params;
  db.Post.update({_id: postId},{ $pull: { "comments" : { _id: commentId} } }, function(err, post){
    if (err) return res.status(400).json({status: 400, message: "please try again..."});
    db.Post.findById(postId, function(err, updatedPost){
      res.status(201).json({status: 201, data: updatedPost});
    })
   
      
 
  });
};



module.exports = {
  create,
  deleteComment
}