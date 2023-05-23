import React from "react";
import "./style.css";

import { TaskContext } from "../../contexts/TaskContext";

function TaskForm() {
  const { addTask, setOpenModal } = React.useContext(TaskContext);
  const [newTaskValue, setNewTaskValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form className="form-task" onSubmit={onSubmit}>
      <label>Create a new task</label>
      <textarea
        placeholder="Make bed ...."
        value={newTaskValue}
        onChange={onChange}
      />
      <button
        type="button"
        className="form-task-button--cancel"
        onClick={onCancel}
      >
        X
      </button>
      <button type="submit" className="form-task-button--add">
        Añadir
      </button>
    </form>
  );
}

export { TaskForm };
