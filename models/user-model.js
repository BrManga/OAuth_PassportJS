const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String
});

const User = mongoose.model("passportjs", userSchema);

module.exports = User;
