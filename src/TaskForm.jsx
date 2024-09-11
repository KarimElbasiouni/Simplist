import { useState }from 'react'
import { useOutletContext, useParams } from 'react-router-dom';


const TaskForm = ({ onClose, addTask, projectId }) => {
    const [taskData, setTaskData] = useState({
        name: '',
        date: '',
        location: '',
    })

    const today = new Date().toISOString().split('T')[0];

    const context = useOutletContext();

    const projects = context?.myProjects || [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData, 
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Task submitted', taskData);
        addTask(taskData, projectId);
        onClose();
    }
    const isTaskNameEmpty = taskData.name.trim() === '';
    
    return (
        <div className = "popup-form">
            <form method = "post" onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    name="name"
                    value={taskData.name} 
                    onChange= {handleChange} 
                    placeholder = "Task Name"
                    required
                />

                <input 
                    type = "date" 
                    name="date"
                    value={taskData.date} 
                    onChange= {handleChange} 
                    placeholder = "Due date"
                    min = {today}
                />
                <select name="location">
                    <option value="inbox">Inbox</option>
                    {projects.map(project => (
                        <option key={project.id} value={project.id}>
                            {project.name}
                        </option>
                    ))}
                </select>
                <div className = "form-btns">
                    <button type="button" onClick={onClose}>Close</button>
                    <button type="submit" disabled ={isTaskNameEmpty}>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm