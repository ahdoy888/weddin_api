const db = require('../models');

// Find all cities that match the current city Id to render
// const show = (req, res) => {
//   db.Post.find({"city":req.params.id}, (err, foundPost) => {
//     if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again...'});

//     res.status(200).json({status: 200, data: foundPost});
//   });
// };

// const index = (req, res) => {
//   db.Post.find({}, (err, foundPosts) => {
//     if (err) return res.status(500).json({status: 500, message: "something went wrong, please try again"});

//     res.status(200).json({status: 200, data: foundPosts});
//   });
// };

const create = (req, res) => {
  db.Post.create(req.body, (err, createdPost) => {
    if (err) return res.status(400).json({status: 400, message: "something went wrong, please try again..."});

    res.status(201).json({status: 201, data: createdPost});
  });
};

const edit = (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedPost) => {
    if (err) return res.status(500).json({status: 500, message: 'Something went wrong, please try again...'})

    res.status(202).json({status: 202, data: editedPost});
  });
};

const deletePost = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again...'});

    res.status(200).json({status: 200, message: 'Success'});
  });
};

module.exports = {
  // show,
  // index,
  create,
  edit,
  deletePost
}
