import React from "react";

export default function Todo(props) {
  return (
    <li>
      {props.task}
      <button>Edit</button>
      <button>X</button>
    </li>
  );
}
