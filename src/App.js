import React from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskFilter } from "./components/TaskFilter";
import { TaskHeader } from "./components/TaskHeader";
import { TaskItem } from "./components/TaskItem";
import { TaskList } from "./components/TaskList";

function App() {
  const defaultTask = [
    { text: "Make bed", completed: false },
    { text: "Make breakfast", completed: false },
    { text: "Take a shower", completed: true },
  ];

  const [tasks, setTask] = React.useState(defaultTask);

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    setTask(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    setTask(newTasks);
  };

  return (
    <>
      <TaskHeader />
      <TaskFilter />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>
      <TaskCreator />
    </>
  );
}

export default App;
