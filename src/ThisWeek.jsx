import React from 'react'
import TaskFormManager from './TaskFormManager'
import { useOutletContext } from 'react-router-dom'
import { format } from 'date-fns'
const ThisWeek = () => {
  const { thisWeekTasks, addTask } = useOutletContext();
  
  const groupedTasks = thisWeekTasks.reduce((groups, task) => {
    const date = task.date;
    if(!groups[date]){
      groups[date] = [];
    }
    groups[date].push(task);
    return groups;
  }, {})

  return (
    <div className="sb-item-body">
        <div>
            <h2>This Week</h2>
            <hr/>
            <div>
              <TaskFormManager addTask = {addTask} />
              {Object.entries(groupedTasks).map(([date, tasks]) => (
                <div key={date}>
                  <h3 className = "date-heading">{format(date, 'PPP')}</h3>
                  <div>
                    <ul>
                      {tasks.map((task, index) => (
                        <>
                          <span></span>
                          <li key={index} className = "todo-item">{task.name}</li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default ThisWeek