import React from 'react'
import TaskFormManager from './TaskFormManager'

const ThisWeek = () => {
  return (
    <div className="sb-item-body">
        <div>
            <h2>This Week</h2>
            <hr/>
            <div>
              <TaskFormManager/>
            </div>
        </div>
    </div>
  )
}

export default ThisWeek