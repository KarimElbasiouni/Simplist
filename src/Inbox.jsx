import React from 'react'
import TaskFormManager from './TaskFormManager'

const Inbox = () => {
  return (
    <div className="sb-item-body">
        <div>
            <h2>Inbox</h2>
            <hr/>
            <div>
              <TaskFormManager/>
            </div>
        </div>
    </div>
  )
}

export default Inbox