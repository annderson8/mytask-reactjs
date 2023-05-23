import "./style.css";
import { TaskContext } from "../../contexts/TaskContext";
import React from "react";

function TaskHeader() {
  const {
    totalTask,
    totalCompletedTask,
  } = React.useContext(TaskContext);

  return (
    <header className="task-header">
      <h1> Welcome to <span>My Task</span></h1>
      <p>In this space you can create a list of tasks and keep track of them.</p>
      {totalTask === totalCompletedTask && totalTask > 0 && (
        <h2>
          Congratulations you have finished all your tasks
      </h2>
      )}
      {totalTask === totalCompletedTask && totalTask <= 0 && (
        <h2>
          You haven't pending tasks
      </h2>
      )}

      { totalTask !== totalCompletedTask && (
        <h2>
          You have completed <span>{totalCompletedTask}</span> Tasks of <span>{totalTask}</span>
        </h2>
      )}
    </header>
  );
}

export { TaskHeader };
