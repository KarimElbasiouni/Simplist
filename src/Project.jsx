import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import TaskFormManager from './TaskFormManager';
import { format } from 'date-fns';
import { TaskCompleteIcon } from "./assets/Icons";
import { useEffect } from "react";

const Project = () => {
  const { projectId } = useParams();
  const context = useOutletContext();
  const navigate = useNavigate();

  const tasks = context?.myProjectTasks || [];
  const projects = context?.myProjects || [];
  const addTask = context?.addTask;
  const removeTask = context?.removeTask;

  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    if (!project) {
      navigate("/inbox");
    }
  }, [project, navigate]);


  console.log(context);


  const projectName = project ? project.name : 'Project not found';

  const projectTasks = tasks.filter(task => task.projectId === projectId);

  
  const handleComplete = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="sb-item-body">
      <div>
        <h2>{projectName}</h2>
        <hr />
        <div>
          <TaskFormManager addTask={addTask} projectId={projectId} />
            {projectTasks.map((task) => (
              <>
                <div key={task.id} className = "todo-item">
                  <div>
                    <button className = "complete-task-button" onClick={()=>handleComplete(task.id)}>
                      <span>
                        <TaskCompleteIcon/>
                      </span>
                    </button>
                    <div>{task.name}</div>
                  </div> 
                  <div>{task.date ? format(task.date, 'PP'): "No due date"}</div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;