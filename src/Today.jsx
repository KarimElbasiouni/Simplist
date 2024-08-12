import React from 'react'
import TaskFormManager from './TaskFormManager'
import { useOutletContext } from 'react-router-dom'

const Today = () => {
  const { todayTasks, addTask } = useOutletContext();
  return (
    <div className="sb-item-body">
        <div>
            <h2>Today</h2>
            <hr/>
            <div>
              <TaskFormManager addTask = {addTask} />
              {todayTasks.map((task, index) => (
                <div key={index} class = "todo-item">
                  <div>
                    <span></span>
                    <div>{task.name}</div>
                  </div> 
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}
export default Today