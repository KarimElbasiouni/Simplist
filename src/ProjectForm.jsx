import {useEffect, useState }from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { v4 as randomId} from 'uuid'

const ProjectForm = ({ onClose, addProject, removeProject }) => {
    const [projectData, setProjectData] = useState({name: ""});
    // useEffect(() => {
    //     const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    //     setProjects(savedProjects);
    // }, []);
    
    // useEffect(() => {
    //     localStorage.setItem('projects', JSON.stringify(projects));
    // }, [projects]);
    
    // const addProject = (projectName) => {
    //     const newProject = {
    //         name: projectName,
    //         id: randomId()
    // }
    //     setProjects((prevProjects) => [...prevProjects, newProject]);
    //     console.log("Project added" + projectName);
    // }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData, 
            [name]: value
    })}
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Project submitted', projectData.name);
        addProject(projectData);
        onClose();
    }
    const isProjectNameEmpty = projectData.name.trim() === '';
  return (
    <div className = "popup-form">
        <form onSubmit={handleSubmit}>
            <input 
            type = "text" 
            name="name"
            value={projectData.name}
            onChange= {handleChange} 
            placeholder = "Project Name"
            required
            />
            <div className = "form-btns">
                <button type="button" onClick={onClose}>Close</button>
                <button type="submit" disabled ={isProjectNameEmpty}>Create</button>
            </div>
        </form>

    </div>
  )
}

export default ProjectForm;