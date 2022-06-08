import React from "react";
import TaskApp from "./components/TaskApp";
import task from "./data/tasks.json";

function App() {
  return (
    <div className="App">
      {/* Code Here */}
      <TaskApp task={task}></TaskApp>
    </div>
  );
}

export default App;
