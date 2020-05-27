import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import styles from "./styles/styles.module.scss";

export default function TodoApp() {
  // const sampleList = [
  //   { id: 1, task: "eat grass", isCompleted: true },
  //   { id: 2, task: "mow it", isCompleted: false },
  // ];

  let [isLoading, setLoading] = useState(false);

  let {
    tasks,
    setTasks,
    addTask,
    removeTask,
    updateTask,
    toggleTodo,
  } = useTodoState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`)
      .then((response) => {
        if (response.data.length > 0) {
          setTasks(response.data);
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.todoColumn}>
        <h1 style={{ textAlign: "center" }}>To Do List</h1>
        <TodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          removeTask={removeTask}
          updateTask={updateTask}
          toggleTodo={toggleTodo}
        />
      </div>
    );
  } else {
    return <h1>LOADING</h1>;
  }
}
