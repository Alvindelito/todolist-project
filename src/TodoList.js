import React from "react";
import Todo from "./Todo";

function TodoList({ tasks, removeTask, updateTask }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
