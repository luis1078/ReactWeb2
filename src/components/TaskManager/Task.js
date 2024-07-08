import React from "react";
import '../../stylesheets/TaskManager/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, finished, finishTask, deleteTask }) {
  return (
    <div className={finished ? 'task-container finished' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => finishTask(id)}>
        {text}
      </div>
      <div
        className='task-icon-container'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='deleteTask-icon' />
      </div>
    </div>
  );
}

export default Task;
