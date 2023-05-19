import "./style.css";

function TaskItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="task-item">
      <button
        onClick={onComplete}
        className={`item-check ${completed && "item-check--active"}`}
      ></button>
      <p className={`item-tetxt  ${completed && "item-tetxt--active"}`}>
        {text}
      </p>
      <button
        onClick={onDelete}
        className="item-close">X</button>
    </li>
  );
}

export { TaskItem };
