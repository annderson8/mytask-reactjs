import "./style.css";

function TaskHeader({ completed, total }) {
  return (
    <header className="task-header">
      <h1> Welcome to <span>My Task</span></h1>
      <h2>
        You have completed <span>{completed}</span> Tasks of <span>{total}</span>
      </h2>
    </header>
  );
}

export { TaskHeader };
