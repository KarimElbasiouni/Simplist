import { useState }from 'react'

const TaskForm = ({ onClose }) => {
    const [taskData, setTaskData] = useState({
        name: '',
        date: '',
        location: 'inbox'
    })

    const handleChange = (e) => {
        const { data, value } = e.target;
        setTaskData({
            ...taskData, 
            [data]: value
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
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    )
}

export default TaskForm