const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 8000;
app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("SUCCESSFULLY CONNECTED");
});

let TodoList = require("./models/todolist.model");

// const makeRice = new TodoList({ task: "Make Rice", isCompleted: false });
// const mowLawn = new TodoList({ task: "Mow Lawn", isCompleted: true });

// makeRice.save().then(() => console.log("make rice saved"));
// mowLawn.save().then(() => console.log("mow Lawn saved"));

app.get("/", (req, res) => {
  TodoList.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/", (req, res) => {
  const newTask = new TodoList({ task: req.body.task, isCompleted: false });

  newTask
    .save()
    .then(() => res.json("New Task Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.delete("/", (req, res) => {
  const taskId = req.body.id;

  TodoList.findByIdAndDelete(taskId)
    .then(() => res.json("Task Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.patch("/", (req, res) => {
  const taskId = req.body.id;
  const updateTask = req.body.updateTask;

  TodoList.findByIdAndUpdate(taskId, { task: updateTask })
    .then(() => res.json("Task Updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
