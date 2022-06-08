import React, { useState } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import AddTask from "./AddTask/AddTask";

import Tasks from "./Tasks/Tasks";

const TaskApp = ({ task }) => {
  const [tasks, setTasks] = useState(task);
  const addHandler = (e) => {
    if (e && !tasks.some((t) => t.text === e)) {
      let obj = {
        id: Math.random(),
        text: e,
        done: false,
        count: 1,
      };
      setTasks([...tasks, obj]);
    }
  };
  const deleteTask = (e) => {
    let add = tasks.filter((ele) => ele.id !== e);
    setTasks(add);
  };
  const change = (e) => {
    let add = tasks.reduce((ac, cv) => {
      if (cv.id === e.id) {
        ac.push(e);
      } else {
        ac.push(cv);
      }
      return ac;
    }, []);
    setTasks([...add]);
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}

      <TaskHeader tasks={tasks} />
      {/* Add Task */}
      <AddTask addHandler={addHandler}></AddTask>
      {/* Tasks */}
      <div className="taskBody">
        <Tasks tasks={tasks} deleteTask={deleteTask} change={change}></Tasks>
      </div>
    </div>
  );
};

export default TaskApp;
