import React from "react";
import UpdateForm from "./UpdateForm";
import useToggleState from "./hooks/useToggleState";
import styles from "./styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
  const { _id, isCompleted, updateTask, removeTask, toggleTodo } = props;
  const [isUpdating, toggleUpdate] = useToggleState(false);

  function handleClick(e) {
    removeTask(_id);
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
        <li className={styles.task}>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => toggleTodo(_id, isCompleted)}
              id="checkbox"
            />
          </label>
          <span
            className={`${styles.content} ${
              isCompleted ? styles.completed : ""
            }`}
          >
            {props.task}
          </span>
          <button onClick={() => toggleUpdate(!isUpdating)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      )}
    </>
  );
}
