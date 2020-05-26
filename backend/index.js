const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("SUCCESSFULLY CONNECTED");
});

let TodoList = require("./models/todolist.model");

// CRUD FUNCTIONS
app.get("/", (req, res) => {
  TodoList.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/", (req, res) => {
  const task = req.body.task;
  const newId = req.body._id;

  const newTask = new TodoList({
    _id: newId,
    task: task,
    isCompleted: false,
  });

  newTask
    .save()
    .then(() => res.json(`${req.body.task} has been added`))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.delete("/", (req, res) => {
  const taskId = req.body._id;
  console.log(req.body);

  TodoList.findByIdAndRemove(taskId)
    .then(() => res.json("Task Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.patch("/", (req, res) => {
  const todoId = req.body._id;
  const isCompleted = req.body.isCompleted;
  const updateTask = req.body.updateTask || null;

  if (updateTask != null) {
    TodoList.findByIdAndUpdate(todoId, {
      task: updateTask,
    })
      .then(() => res.json("Task Updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  } else {
    TodoList.findByIdAndUpdate(todoId, {
      isCompleted: isCompleted,
    })
      .then(() => res.json("Task Updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
