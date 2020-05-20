import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import styles from "./styles/styles.module.scss";

export default function TodoApp() {
  const sampleList = [
    { id: 1, task: "eat grass", isCompleted: true },
    { id: 2, task: "mow it", isCompleted: false },
  ];

  const { tasks, addTask, removeTask, updateTask, toggleTodo } = useTodoState(
    sampleList
  );

  return (
    <div className={styles.todoColumn}>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      {/* Todo Form */}
      <TodoForm addTask={addTask} />
      {/* Todo List */}
      <TodoList
        tasks={tasks}
        removeTask={removeTask}
        updateTask={updateTask}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
