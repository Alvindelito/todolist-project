import React from "react";
import Todo from "./Todo";

function TodoList({ tasks, removeTask }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo key={todo.id} {...todo} removeTask={removeTask} />
      ))}
    </div>
  );
}

export default TodoList;
