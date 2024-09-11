import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { isToday, isThisWeek } from './dateUtils';
import { v4 as randomId} from 'uuid'

function App() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addTask = (task, projectId = null) => {
    const newTask = {
      ...task,
      id: randomId(),
      projectId: projectId,
      location: projectId ? 'project' : 'inbox',
      date: task.date ? new Date(task.date).toISOString() : null,
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("Task added" + task);
  }
  const addProject = (project) => {
    if (projects.length >= 5) {
      alert("You can only add up to 5 projects.");
      return;
    }

    const newProject = {
      ...project,
      id: randomId()
    }
    setProjects((prevProjects) => [...prevProjects, newProject]);
    console.log("Project added" + project);
  }

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const removeProject = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
  }

  const myProjects = projects;

  const inboxTasks = tasks.filter(task => task.location === 'inbox');
  const myProjectTasks = tasks.filter(task => task.location !== 'inbox');
 

  const todayTasks = tasks.filter(task => {
    if (!task.date) return false; 
    const isTaskToday = isToday(task.date);
    console.log(`Task: ${task.name}, Date: ${task.date}, Is Today: ${isTaskToday}`); 
    return isTaskToday;
  });
  const thisWeekTasks = tasks.filter(task => isThisWeek(task.date));

  return (
    <div className = "main">
      <Sidebar addTask = {addTask} projectFunctions = {{addProject, removeProject, myProjects}}/>
      <Outlet context = {{ inboxTasks, todayTasks, thisWeekTasks, myProjectTasks, addTask, removeTask, myProjects }}/>
    </div>
  );
}

export default App
