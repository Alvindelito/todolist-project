import React from "react";
import Todo from "./Todo";
import styles from "./styles/styles.module.scss";

function TodoList({ tasks, removeTask, updateTask, toggleTodo }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((todo) => (
        <Todo
          key={todo._id}
          {...todo}
          removeTask={removeTask}
          updateTask={updateTask}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
