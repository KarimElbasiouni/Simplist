import React from 'react'
import UserProfile from './UserProfile'
import TaskAdder from './TaskAdder'
import Buttons from './Buttons'
import MyProjects from './MyProjects'
import AppLogo from './AppLogo'


const Sidebar = () => {
  return (
    <div className = "sidebar">
        <AppLogo/>
        <UserProfile />
        <TaskAdder/>
        <Buttons/>
        <MyProjects />
    </div>
  )
}

export default Sidebar