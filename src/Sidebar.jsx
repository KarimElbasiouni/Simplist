import React from 'react'
import UserProfile from './UserProfile'
import TaskAdder from './TaskAdder'
import InboxButton from './InboxButton'
import MyProjects from './MyProjects'
import AppLogo from './AppLogo'

import './App.css'

const Sidebar = () => {
  return (
    <div className = "sidebar">
        <AppLogo/>
        <UserProfile />
        <TaskAdder/>
        <div className ="buttons">
            <InboxButton/>
        </div>
        <MyProjects />
    </div>
  )
}

export default Sidebar