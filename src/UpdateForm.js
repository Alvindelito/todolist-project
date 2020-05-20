import React from "react";
import useInputState from "./hooks/useInputState";
import styles from "./styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TodoForm(props) {
  const { id, task, updateTask, toggleUpdate } = props;
  const [value, handleChange] = useInputState(task);
  return (
    <form
      className={`${styles.TodoForm} ${styles.updateFormBorder}`}
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
      <button className={styles.formButton}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </form>
  );
}
