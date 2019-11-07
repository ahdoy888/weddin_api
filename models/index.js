const mongoose = require('mongoose');
const DB_URL = process.env.DB_URI || 'mongodb://heroku_7m5mr4r8:n5bqv7gop92jo99ri2iprips1d@ds141168.mlab.com:41168/heroku_7m5mr4r8';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected successfully...!'))
  .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  User: require('./User'),
  Post: require('./Post'),
  
};