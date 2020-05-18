import React from "react";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
  const { id, task, updateTask, toggleUpdate } = props;
  const [value, handleChange] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value !== "") {
          updateTask(id, value);
          toggleUpdate(false);
        }
      }}
    >
      <label htmlFor="Add New Task">
        New Task:
        <input type="text" name="name" value={value} onChange={handleChange} />
      </label>
      <button>Update</button>
    </form>
  );
}
