import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// Central Todo State to perform CRUD functions on client & server asynchronously.
export default (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  return {
    tasks,
    setTasks,
    addTask: (newTask) => {
      const newId = uuidv4();
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}`, { task: newTask })
        .then((response) => console.log(response.data))
        .then(() =>
          setTasks([
            ...tasks,
            { _id: newId, task: newTask, isCompleted: false },
          ])
        )
        .catch((error) => console.log(error));
    },
    removeTask: (id) => {
      const removeId = { id: id };

      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}`, { data: removeId })
        .then((response) => console.log(response))
        .then(() => setTasks(tasks.filter((task) => task._id !== id)))
        .catch((error) => console.log(error));
    },
    updateTask: (id, updatedTask) => {
      const updateTask = { id: id, updateTask: updatedTask };

      axios
        .patch(`${process.env.REACT_APP_SERVER_URL}`, updateTask)
        .then((response) => console.log(response))
        .then(() =>
          setTasks(
            tasks.map((todo) =>
              todo._id === id ? { ...todo, task: updatedTask } : todo
            )
          )
        )
        .catch((error) => console.log(error));
    },
    toggleTodo: (id, isCompleted) => {
      const updatedTodos = tasks.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      axios
        .patch(`${process.env.REACT_APP_SERVER_URL}`, {
          id: id,
          isCompleted: !isCompleted,
        })
        .then((response) => console.log(response))
        .then(() => setTasks(updatedTodos))
        .catch((error) => console.log(error));
    },
  };
};
