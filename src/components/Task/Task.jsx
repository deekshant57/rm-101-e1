import React from "react";
import styles from "./task.module.css";
import svg from "../../assets/remove.svg";
import Counter from "../Counter/Counter";

const Task = ({ task, deleteTask, change }) => {
  // NOTE: do not delete `data-testid` key value pair
  const toggler = () => {
    change({ ...task, done: !task.done });
  };

  const countHandler = (e) => {
    if (e > 0) {
      change({ ...task, count: e });
    }
  };
  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        data-testid="task-checkbox"
        className="taskRemove taskCheckbox"
        onChange={toggler}
        checked={task.done}
      />
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count={task.count} countHandler={countHandler}></Counter>
      <button
        data-testid="task-remove-button"
        onClick={() => deleteTask(task.id)}
      >
        <img src={svg} alt="remove" />
      </button>
    </li>
  );
};

export default Task;
