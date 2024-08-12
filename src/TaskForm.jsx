import { useState }from 'react'

const TaskForm = ({ onClose, addTask }) => {
    const [taskData, setTaskData] = useState({
        name: '',
        date: '',
        location: 'inbox'
    })

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
        addTask(taskData);
        onClose();
    }
    const isTaskNameEmpty = taskData.name.trim() === '';
    return (
        <div className = "popup-form">
            <form action = "./toDoItems.jsx" method = "post" onSubmit={handleSubmit}>
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
                />
                <select name="location">
                    <option value="inbox">Inbox</option>
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