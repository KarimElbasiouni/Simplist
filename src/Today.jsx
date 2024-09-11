import React from 'react'
import TaskFormManager from './TaskFormManager'
import { useOutletContext } from 'react-router-dom'
import { TaskCompleteIcon } from './assets/Icons.jsx';

const Today = () => {
  const { todayTasks, addTask, removeTask } = useOutletContext();

  const handleComplete = (taskId) => {
    removeTask(taskId);
  }

  return (
    <div className="sb-item-body">
        <div>
            <h2>Today</h2>
            <hr/>
            <div>
              <TaskFormManager addTask = {addTask} />
              {todayTasks.map((task) => (
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
                  </div>
                </>
              ))}
            </div>
        </div>
    </div>
    
  )
}
export default Today