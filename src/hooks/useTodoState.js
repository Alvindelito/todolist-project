import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  return {
    tasks,
    setTasks,
    addTask: (newTask) => {
      setTasks([
        ...tasks,
        { _id: uuidv4(), task: newTask, isCompleted: false },
      ]);
    },
    removeTask: (id) => {
      setTasks(tasks.filter((task) => task._id !== id));
    },
    updateTask: (id, updatedTask) => {
      setTasks(
        tasks.map((todo) =>
          todo._id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    },
    toggleTodo: (id) => {
      const updatedTodos = tasks.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      setTasks(updatedTodos);
    },
  };
};
