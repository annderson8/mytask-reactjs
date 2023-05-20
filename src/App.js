import React from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Index } from "./pages";


function App() {
  const defaultTask = [
    { text: "Make bed", completed: false },
    { text: "Make breakfast", completed: false },
    { text: "Take a shower", completed: true },
    { text: "Going to work", completed: false },
  ]


  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', defaultTask);

  const [filterValue, setFilterValue] = React.useState('');

  const totalTask = tasks.length;
  const totalCompletedTask = tasks.filter( task => !!task.completed).length;



  const filteredTask = tasks.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const filterText = filterValue.toLowerCase();
      return taskText.includes(filterText);
    }
  );

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <>
      <Index
        totalCompletedTask = {totalCompletedTask}
        totalTask = {totalTask}
        filterValue = {filterValue}
        setFilterValue = {setFilterValue}
        filteredTask = {filteredTask}
        completeTask = {completeTask}
        deleteTask = {deleteTask}
      />
    </>
  );
}

export default App;
