import "./style.css";

function TaskHeader({ completed, total }) {
  return (
    <header className="task-header">
      <h1> Welcome to <span>My Task</span></h1>
      {total === completed && total > 0 && (
        <h2>
          Congratulations you have finished all your tasks
      </h2>
      )}
      {total === completed && total <= 0 && (
        <h2>
          You haven't pending tasks
      </h2>
      )}

      { total !== completed && (
        <h2>
          You have completed <span>{completed}</span> Tasks of <span>{total}</span>
        </h2>
      )}
    </header>
  );
}

export { TaskHeader };
