import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  return {
    tasks,
    addTask: (newTask) => {
      setTasks([...tasks, { id: uuidv4(), task: newTask, isCompleted: false }]);
    },
    removeTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    updateTask: (id, updatedTask) => {
      setTasks(
        tasks.map((todo) =>
          todo.id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    },
    toggleTodo: (id) => {
      setTasks(
        tasks.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
  };
};
