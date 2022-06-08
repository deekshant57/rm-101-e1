import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import empty from "../../assets/empty.svg";

const Tasks = ({ tasks, deleteTask, change }) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {tasks.length !== 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          {/* <Task></Task> */}
          {tasks.map((el, i) => (
            <Task
              key={i}
              task={el}
              deleteTask={deleteTask}
              change={change}
            ></Task>
          ))}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          <img src={empty} alt="" />
          <p>
            <b>Empty list</b>
          </p>
          <p>Add a new task above</p>
        </div>
      )}
    </>
  );
};

export default Tasks;
