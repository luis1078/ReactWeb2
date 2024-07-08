import React, { useState } from "react";
import '../../stylesheets/TaskManager/TaskForm.css';

function TaskForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleTask = e => {
    e.preventDefault();
    const newTask = {
      text: input,
      finished: false
    };

    props.onSubmit(newTask);
    setInput('');
  };

  return (
    <form
      className='task-form'
      onSubmit={handleTask}>
      <input
        className='input-task'
        type='text'
        placeholder='Add a task'
        name='text'
        value={input}
        onChange={handleChange}
      />
      <button className='button-task'>
        Add task
      </button>
    </form>
  );
}

export default TaskForm;
