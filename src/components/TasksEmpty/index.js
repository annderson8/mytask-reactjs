import React from 'react';
import './style.css'

function TasksEmpty() {
  return (
    <div className='item-empty'>
        <p className='title-empty'>¡Create your first Task!</p>
        <p className='subtitle-empty'>You can create new Tasks with the green icon below</p>
        <button className='button-empty'>+</button>
    </div>
  );
}

export { TasksEmpty };