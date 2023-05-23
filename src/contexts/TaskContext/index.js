import React from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider ({ children }){

    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error,
        } = useLocalStorage('TASKS_V1', []);
    
      const [filterValue, setFilterValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const totalTask = tasks.length;
      const totalCompletedTask = tasks.filter( task => !!task.completed).length;
    
      const filteredTask = tasks.filter(
        (task) => {
          const taskText = task.text.toLowerCase();
          const filterText = filterValue.toLowerCase();
          return taskText.includes(filterText);
        }
      );

      const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
          text,
          completed : false
        })
        saveTasks(newTasks);
      }
    
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
        <TaskContext.Provider value = {{
            loading,
            error,
            totalTask,
            totalCompletedTask,
            filteredTask,
            filterValue,
            setFilterValue,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
            addTask

        }}>
            {children}
        </TaskContext.Provider>

      );
}

export {TaskContext, TaskProvider}