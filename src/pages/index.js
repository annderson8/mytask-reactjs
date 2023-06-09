import React from "react";

import { TaskHeader } from "../components/TaskHeader";
import { TaskFilter } from "../components/TaskFilter";
import { TaskList } from "../components/TaskList";
import { TaskItem } from "../components/TaskItem";
import { TaskCreator } from "../components/TaskCreator";
import { TasksLoading } from "../components/TasksLoading";
import { TasksError } from "../components/TasksError";
import { TasksEmpty } from "../components/TasksEmpty";
import { TaskContext } from "../contexts/TaskContext";
import { TaskForm } from "../components/TaskForm";
import { Modal } from "../components/Modal";

function Index() {

  const {
    loading,
    error,
    filteredTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);
  return (
    <>
      <TaskHeader/>
      <TaskFilter/>

      <TaskList>
        {loading && (
          <>
            <TasksLoading />
            <TasksLoading />
            <TasksLoading />
          </>
        )}
        {error && <TasksError />}
        {!loading && filteredTask.length === 0 && <TasksEmpty />}

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
      <TaskCreator
        setOpenModal = {setOpenModal}
       />

      { openModal  && 
        <Modal>
          <TaskForm/>
        </Modal>
      }
    </>
  );
}

export { Index };
