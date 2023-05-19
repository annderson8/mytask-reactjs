import './style.css';


function TaskItem () {

    return (

        <li className='task-item'>
            <button className='item-check'></button>
            <p>Task</p>
            <button className='item-close'>X</button>
        </li>
    )

}

export { TaskItem }
