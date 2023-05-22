import React, { useContext } from "react";
import "./style.css";
import { TaskContext } from "../../contexts/TaskContext";

function TaskFilter() {
  const {
    filterValue,
    setFilterValue,
  } = useContext(TaskContext);

  return (
    <div className="task-filter">
      <input 
        placeholder="Filter your Tasks here"
        value={filterValue}
        onChange={(event) => {
          setFilterValue(event.target.value);
      }}
       />
    </div>
  );
}

export { TaskFilter };
