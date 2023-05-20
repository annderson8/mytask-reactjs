import React from "react";

import { TaskHeader } from "../components/TaskHeader";
import { TaskFilter } from "../components/TaskFilter";
import { TaskList } from "../components/TaskList";
import { TaskItem } from "../components/TaskItem";
import { TaskCreator } from "../components/TaskCreator";

function Index ( {
    totalCompletedTask,
    totalTask,
    filterValue,
    setFilterValue,
    filteredTask,
    completeTask,
    deleteTask

}){

    return (
        <>
      <TaskHeader
        completed={totalCompletedTask}
        total= {totalTask}
      />
      <TaskFilter
        filterValue={filterValue}
        setFilterValue={setFilterValue} />

      <TaskList>
        {filteredTask.map((task) => (
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

export { Index }