import React from "react";
import TodoApp from "./TodoApp";
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <TodoApp />
    </div>
  );
}

export default App;
