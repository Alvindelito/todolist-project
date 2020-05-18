import React from "react";
import UpdateForm from "./UpdateForm";
import useToggleState from "./hooks/useToggleState";

export default function Todo(props) {
  const { id, isCompleted, updateTask, removeTask, toggleTodo } = props;
  const [isUpdating, toggleUpdate] = useToggleState(false);

  function handleClick(e) {
    removeTask(id);
  }
  return (
    <>
      {isUpdating ? (
        <UpdateForm
          {...props}
          updateTask={updateTask}
          toggleUpdate={toggleUpdate}
        />
      ) : (
        <li>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleTodo(id)}
          />
          {props.task}
          <button onClick={() => toggleUpdate(!isUpdating)}>Edit</button>
          <button onClick={handleClick}>X</button>
        </li>
      )}
    </>
  );
}
