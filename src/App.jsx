import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { isToday, isThisWeek } from './dateUtils';
import { v4 as randomId} from 'uuid'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: randomId()
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("Task added" + task);
  }
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }
  const inboxTasks = tasks.filter(task => task.location === 'inbox');
  const todayTasks = tasks.filter(task => isToday(task.date));
  const thisWeekTasks = tasks.filter(task => isThisWeek(task.date));

  return (
    <div className = "main">
      <Sidebar addTask = {addTask}/>
      <Outlet context = {{ inboxTasks, todayTasks, thisWeekTasks,  addTask, removeTask }}/>
    </div>
  );
}

export default App
