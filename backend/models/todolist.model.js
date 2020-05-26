const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var TodoListSchema = new Schema(
  {
    _id: { type: String, required: true },
    task: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { _id: false }
);

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;
