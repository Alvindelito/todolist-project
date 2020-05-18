import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

export default function Todo(props) {
  const { id, updateTask, removeTask } = props;
  const [isUpdating, toggleUpdate] = useState(false);
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
          {props.task}
          <button onClick={() => toggleUpdate(!isUpdating)}>Edit</button>
          <button onClick={handleClick}>X</button>
        </li>
      )}
    </>
  );
}
