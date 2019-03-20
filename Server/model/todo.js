const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  TeamId: {
    type: String
  },
  Todo: {
    type: String,
    unique: true
  },
  CreatedOn: {
    type: Date,
    default: Date.now
  },
  UpdatedOn: {
    type: Date
  }
}, {
  versionKey: false
});

const todosModel = (module.exports = mongoose.model("Todos", todoSchema, "Todos"));