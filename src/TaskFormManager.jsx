import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { AddTaskIcon } from './assets/Icons';

const TaskFormManager = ({ addTask, projectId }) => {

  console.log('taskFormManager received addTask:', addTask);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = ()  => setIsFormOpen(false);

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
          <TaskForm onClose = {closeForm} addTask = {addTask}  projectId={projectId} />
        </div>
      }
    </>
  )
}

export default TaskFormManager