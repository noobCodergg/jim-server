const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name:String,
    password:String,
    role:String
  }
);

module.exports = mongoose.model('users', userSchema);
