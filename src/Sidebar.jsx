import React from 'react'
import UserProfile from './UserProfile'
import TaskFormManager from './TaskFormManager'
import Buttons from './Buttons'
import MyProjects from './MyProjects'
import AppLogo from './AppLogo'


const Sidebar = () => {
  return (
    <div className = "sidebar">
        <AppLogo/>
        <UserProfile />
        <TaskFormManager/>
        <Buttons/>
        <MyProjects />
    </div>
  )
}

export default Sidebar