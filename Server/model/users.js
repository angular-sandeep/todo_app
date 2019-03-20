const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  UserName: {
    type: String,
    unique: true
  },
  Password: {
    type: String
  },
  TeamId: {
    type: String
  }
}, {
  versionKey: false
});

const userModel = (module.exports = mongoose.model("Users", userSchema, "Users"));