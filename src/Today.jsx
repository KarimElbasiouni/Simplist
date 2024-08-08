import React from 'react'
import TaskFormManager from './TaskFormManager'

const Today = () => {
  return (
    <div className="sb-item-body">
        <div>
            <h2>Today</h2>
            <hr/>
            <div>
            <TaskFormManager/>
            </div>
        </div>
    </div>
  )
}

export default Today