const db = require('../models');


const index = (req, res) => {
  db.Post.find({}, (err, foundPosts) => {
    if (err) return res.status(500).json({status: 500, message: "something went wrong, please try again"});

    res.status(200).json({status: 200, data: foundPosts});
  });
};

const create = (req, res) => {
  console.log("-------->" + db.Post)
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

const show = (req, res) => {
  // console.log("Show backend");
  
  db.Post.findOne({}, null, {}, function (err, foundPosts) {
    console.log("Found results");
    console.log(docs);
  });
  res.send(foundPosts)
  // res.status(200).json({status: 200, message: 'Success'});
}

module.exports = {
  show,
  index,
  create,
  edit,
  deletePost
}
