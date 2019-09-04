const bcrypt = require('bcryptjs');
const db = require('../models');
const validate = require('../validation/register');

const register = (req, res)=> {
  const { errors, notValid } = validate(req.body);

  if (notValid) {
    return res.status(400).json({
      status: 400, errors});
  }

  db.User.findOne({ email: 
    req.body.email }, (err, foundUser) => {
    if (err) return res.status(500).json
    ({ status: 500, message: 'It is not correct. Please try again'});

    if (foundUser) return res.status(400).json({ status: 400, message: 'Email address has already been registered. Please try again'});

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json
    ({ status: 500, message: 'Something went wrong. Please try again'});

    bcrypt.hash(req.body.password, 
    salt, (err, hash) => {
      if (err) return res.status(500)
      .json({ status: 500, message:
      'Something went wrong. Please try again'});

      const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      }

      db.User.create(newUser, (err, savedUser)=> {
        if(err) return res.status(500).json({
          status: 500, message: err});
          res.status(201).json({ status: 201, message: 'success'});
      })
    })
  })
  })
}

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ status: 400,
    status: 400, message: 'Please enter your email  and password'});
  }

  db.User.findOne({email: req.body.email}, 
  (err, foundUser)=> { 
    if (err) return res.status(500).json({
    status: 500, message: 'Something went wrong. Please try again'});

    if (!foundUser) {
      return res.status(400).json({
      status: 400, message: 'Email or password is incorrect'});
    }

    bcrypt.compare(req.body.password,
    foundUser.password, (err, isMatch)=> {
      if (err) return res.status(500).json({
      status: 500, message: 'Something went wrong. Please try again'});

      if (isMatch) {
        req.session.loggedIn = true;
        req.session.currentUser = { id: 
        foundUser._id };
        // console.log('Session = ', req.session);
        return res.status(200).json({
        status: 200, message: 'Success', id:
        foundUser._id });
      } else {
        return res.status(400).json({
        status: 400, message: 'Email or password is incorrect'});
      }
    })
  })
};

const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({
    status: 500, message: 'Something went wrong. Please try again'});

    res.sendStatus(200);
  })
};

const vertify = (req, res) => {
  res.status(200).json({ status: 200,
  message: `Current user vertified. 
  User ID = ${req.session.currentUser.id}`});
};

module.exports = {
  register,
  login,
  logout,
  vertify,
}