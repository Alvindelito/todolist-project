import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const sampleList = [
    { id: 1, task: "eat grass", isCompleted: false },
    { id: 2, task: "mow it", isCompleted: false },
  ];

  const [tasks, setTasks] = useState(sampleList);

  const addTask = (value) => {
    setTasks([...tasks, value]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To Do List</h1>
      {/* Todo Form */}
      <TodoForm addTask={addTask} />
      {/* Todo List */}
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
