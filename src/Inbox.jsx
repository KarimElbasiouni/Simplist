import React from 'react'
import TaskFormManager from './TaskFormManager'
import { useOutletContext } from 'react-router-dom'
import { format } from 'date-fns'
import { TaskCompleteIcon } from './assets/Icons.jsx'

const Inbox = () => {
  const { inboxTasks, addTask, removeTask } = useOutletContext();

  const handleComplete = (taskId) => {
    removeTask(taskId);
  }

  return (
    <div className="sb-item-body">
        <div>
            <h2>Inbox</h2>
            <hr/>
            <div>
              <TaskFormManager addTask = {addTask} />
              {inboxTasks.map((task) => (
                <>
                  <div key={task.id} className = "todo-item">
                    <div>
                      <button className = "complete-task-button" onClick={()=>handleComplete(task.id)}>
                        <span>
                          <TaskCompleteIcon/>
                        </span>
                      </button>
                      <div>{task.name}</div>
                    </div> 
                    <div>{task.date && format(task.date, 'PP')}</div>
                  </div>
                </>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Inbox