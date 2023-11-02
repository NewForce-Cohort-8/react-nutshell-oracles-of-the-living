import { useNavigate } from "react-router-dom"; //made a seperate coponent for delete. i import and  invoke in tasklist.js
import {  getTaskDelete } from "./TaskApiManager"

export const TaskDeleteButton = ({ taskId, onDelete }) => {
    const handleDelete = () => {
        getTaskDelete(taskId)
        .then(() => {
            onDelete(taskId);
  });
    };

    return (
        <button onClick={handleDelete} className="delete-btn"> Delete </button>
    );
};
