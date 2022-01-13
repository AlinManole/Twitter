const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePicture: String,
  description: String,
  birthday: Date,
  comments: Object
},{
  timestamps: true
})

const User = model('User', UserSchema)

module.exports = User