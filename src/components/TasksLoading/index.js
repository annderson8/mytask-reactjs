import React from 'react';
import './style.css';

function TasksLoading() {
  return (
    <li className="item-loading">
      <span></span>
      <p>
        .... Loading
      </p>
      <span></span>
    </li>
  );
}

export { TasksLoading };