const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var TodoListSchema = new Schema({
  task: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
});

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;
