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
          addTask({ id: uuidv4(), task: value, isCompleted: false });
          reset();
        }}
      >
        <label htmlFor="Add New Task">
          New Task:
          <input
            type="text"
            name="name"
            placeholder="HERE"
            value={value}
            onChange={handleChange}
          />
        </label>
        <button>ADD</button>
      </form>
    </div>
  );
}
