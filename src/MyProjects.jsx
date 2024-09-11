import {useEffect, useState }from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { v4 as randomId} from 'uuid'
import ProjectForm from './ProjectForm';
import { ProjectIcon , TrashIcon} from './assets/Icons';

const MyProjects = ({projectFunctions}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { addProject, removeProject, myProjects } = projectFunctions;
  const openForm = () => setIsFormOpen(true);
  const closeForm = ()  => setIsFormOpen(false);


  return (
    <>
      <span className = "my-projects">
        <div>My Projects</div>
        <div>
          <button className = "project-adder" onClick = {openForm}>+</button>
        </div>
      </span>
      <ul className = "buttons">
        {myProjects && myProjects.map((project) =>(
          <li key={project.id} className = "my-projects-item">
            <span className = "sb-item">
              <Link to={`/my-projects/${project.id}`}>
                <ProjectIcon className="icon"/> {project.name}
              </Link>
              <button className = "project-deleter" onClick = {() => removeProject(project.id)}><TrashIcon className="icon"/></button>
            </span>
          </li>
        ))}
      </ul>
      {isFormOpen &&
        <div className ="project-form-container">
          <ProjectForm onClose = {closeForm} addProject = {addProject} removeProject = {removeProject}/>
        </div>
      }
    </>

  )
}

export default MyProjects