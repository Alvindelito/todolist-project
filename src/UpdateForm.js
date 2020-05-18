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
      <label htmlFor="Update Current Task">
        <input
          type="text"
          name="updatedTask"
          value={value}
          onChange={handleChange}
        />
      </label>
      <button>Update</button>
    </form>
  );
}
