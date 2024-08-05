import { useState } from 'react';
import TaskForm from './TaskForm';


const TaskFormManager = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = ()  => setIsFormOpen(false);

  return (
    <div>
      <span>Icon</span>
      <button className="add-btn" onClick={openForm}>Add task</button>
      {isFormOpen &&
        <div className ="form-container">
          <TaskForm onClose = {closeForm} />
        </div>
      }
    </div>
  )
}

export default TaskFormManager