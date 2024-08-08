import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { AddTaskIcon } from './assets/Icons';

const TaskFormManager = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const openForm = () => setIsFormOpen(true);
  const closeForm = ()  => setIsFormOpen(false);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task ]);
    console.log(tasks);
  }

  return (
    <>
      <span className = "sb-item">
        <button className="add-btn" onClick={openForm}> 
          <AddTaskIcon className = "icon"/>
          Add Item
        </button>
      </span>
      {isFormOpen &&
        <div className ="form-container">
          <TaskForm onClose = {closeForm} addTask = {addTask} />
        </div>
      }
    </>
  )
}

export default TaskFormManager