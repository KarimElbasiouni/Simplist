import React from 'react'
import TaskFormManager from './TaskFormManager'
import Buttons from './Buttons'
import MyProjects from './MyProjects'
import AppLogo from './AppLogo'


const Sidebar = ({ addTask, projectFunctions }) => {

  console.log('Sidebar received addTask:', addTask);
  return (
    <div className = "sidebar">
        <AppLogo/>
        <TaskFormManager addTask={addTask}/>
        <Buttons/>
        <MyProjects projectFunctions = {projectFunctions} />
    </div>
  ) 
}

export default Sidebar