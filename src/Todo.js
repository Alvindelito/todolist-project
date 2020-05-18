import React from "react";

export default function Todo(props) {
  function handleClick() {
    props.removeTask(props.id);
  }
  return (
    <li>
      {props.task}
      <button>Edit</button>
      <button onClick={handleClick}>X</button>
    </li>
  );
}
