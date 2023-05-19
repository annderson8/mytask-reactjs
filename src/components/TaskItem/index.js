import "./style.css";

function TaskItem( {text} ) {
  return (
    <li className="task-item">
      <button className="item-check"></button>
      <p>{text}</p>
      <button className="item-close">X</button>
    </li>
  );
}

export { TaskItem };
