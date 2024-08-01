import { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className = "main">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default App
