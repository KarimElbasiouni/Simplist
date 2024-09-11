import React from 'react'
import TaskFormManager from './TaskFormManager'
import { useOutletContext } from 'react-router-dom'
import { format } from 'date-fns'
import { TaskCompleteIcon } from './assets/Icons'
const ThisWeek = () => {
  const { thisWeekTasks, addTask, removeTask } = useOutletContext();
  
  const groupedTasks = thisWeekTasks.reduce((groups, task) => {
    const date = task.date;
    if(!groups[date]){
      groups[date] = [];
    }
    groups[date].push(task);

    return groups;
  }, {})

  const sortedGroupedTasks = Object.keys(groupedTasks)
  .sort((a, b) => new Date(a) - new Date(b))
  .reduce((sorted, key) => {
    sorted[key] = groupedTasks[key];
    return sorted;
  }, {});

  const handleComplete = (taskId) => {
    removeTask(taskId);
  }

  return (
    <div className="sb-item-body">
        <div>
            <h2>This Week</h2>
            <hr/>
            <div>
              <TaskFormManager addTask = {addTask} />
              {Object.entries(sortedGroupedTasks).map(([date, tasks]) => (
                <div key={date}>
                  <h3 className = "date-heading">{format(date, 'PPP')}</h3>
                  <div>
                    <ul>
                      {tasks.map((task) => (
                        <div className = "todo-item">
                          <div>
                            <button className = "complete-task-button" onClick={()=>handleComplete(task.id)}>
                              <span>
                                <TaskCompleteIcon/>
                              </span>
                            </button>
                            <li key={task.id}>{task.name}</li>
                          </div>
                        </div>
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