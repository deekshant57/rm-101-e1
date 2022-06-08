import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addHandler }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task, SetTask] = useState("");
  const clickHandler = () => {
    addHandler(task);
    SetTask("");
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add Task..."
        value={task}
        onChange={(e) => SetTask(e.target.value)}
      />
      <button data-testid="add-task-button" onClick={clickHandler}>
        +
      </button>
    </div>
  );
};

export default AddTask;
