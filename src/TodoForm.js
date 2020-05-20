import React from "react";
import useInputState from "./hooks/useInputState";
import styles from "./styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoForm({ addTask }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <form
      className={styles.TodoForm}
      onSubmit={(e) => {
        e.preventDefault();
        if (value !== "") {
          addTask(value);
        }
        reset();
      }}
    >
      <label htmlFor="Add New Task">
        <button className={styles.formButton}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <input
          type="text"
          name="newTask"
          placeholder="New Task"
          value={value}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
