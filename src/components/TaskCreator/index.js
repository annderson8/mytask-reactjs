import "./style.css";

function TaskCreator( { setOpenModal } ) {
  return (
    <div className="task-creator">
      <button
      onClick={
        ()=> {
          setOpenModal(state => !state)
        }
      }>
        +
      </button>
      <a className="link" href="https://github.com/annderson8/mytask-reactjs">Repository in GitHub.</a>
    </div>
  );
}

export { TaskCreator };
