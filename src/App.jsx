import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import MainBody from './MainBody'

function App() {

  return (
    <div className = "main">
        <Sidebar/>
        <MainBody/>
    </div>
  )
}

export default App
