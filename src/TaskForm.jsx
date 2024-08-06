import { useState }from 'react'

const TaskForm = ({ onClose }) => {
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
        console.log(taskData);
        onClose();
    }
    return (
        <div className = "popup-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    name="name" 
                    value={taskData.name} 
                    onChange= {handleChange} 
                    placeholder = "Task Name"
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
                    <option value="opt2">option2</option>
                </select>
                <div className = "form-btns">
                    <button type="button" onClick={onClose}>Close</button>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm