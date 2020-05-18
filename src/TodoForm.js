import React from "react";
import useInputState from "./hooks/useInputState";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ addTask }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value !== "") {
            addTask(value);
          }
          reset();
        }}
      >
        <label htmlFor="Add New Task">
          New Task:
          <input
            type="text"
            name="newTask"
            placeholder="Example: Collect Wool"
            value={value}
            onChange={handleChange}
          />
        </label>
        <button>ADD</button>
      </form>
    </div>
  );
}
