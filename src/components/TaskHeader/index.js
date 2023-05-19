import "./style.css";

function TaskHeader() {
  return (
    <header className="task-header">
      <h1> Welcome to <span>My Task</span></h1>
      <h2>
        You have completed <span>2</span> Tasks of <span>5</span>
      </h2>
    </header>
  );
}

export { TaskHeader };
