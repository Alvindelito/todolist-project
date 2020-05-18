import React from "react";
import Todo from "./Todo";

function TodoList({ tasks }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
