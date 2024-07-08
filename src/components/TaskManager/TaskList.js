import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm.js";
import Task from "./Task";
import '../../stylesheets/TaskManager/TaskList.css';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  const addTask = task => {
    if (task.text.trim()) {
      axios.post('http://localhost:5000/tasks', task)
        .then(response => {
          setTasks([response.data, ...tasks]);
        })
        .catch(error => {
          console.error('There was an error adding the task!', error);
        });
    }
  };

  const deleteTask = id => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  };

  const finishTask = id => {
    axios.put(`http://localhost:5000/tasks/${id}`)
      .then(response => {
        setTasks(tasks.map(task => task._id === id ? response.data : task));
      })
      .catch(error => {
        console.error('There was an error finishing the task!', error);
      });
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map(task =>
            <Task
              key={task._id}
              id={task._id}
              text={task.text}
              finished={task.finished}
              finishTask={finishTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;
