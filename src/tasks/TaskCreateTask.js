import { useNavigate } from "react-router-dom"; 

export const TaskCreateTaskButton = () => {
    const navigate =useNavigate()
    return (
    <button className="create-task-btn" onClick={() => navigate("/task/create")}>Create Task</button>
    );
}