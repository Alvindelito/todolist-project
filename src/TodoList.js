import React from "react";
import Todo from "./Todo";

function TodoList({ tasks, removeTask, updateTask, toggleTodo }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          removeTask={removeTask}
          updateTask={updateTask}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
