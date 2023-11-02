import { useNavigate } from "react-router-dom";

// export const TaskDeleteButton = () => {
//     const navigate =useNavigate()
//     return (
//     <button onClick={()=>{
//         fetch(`http://localhost:8088/tasks/`,{
//             method: "DELETE"
//         }).then(() => {})
//     }} className="delete-btn"> Delete </button>
//     );
// }

export const TaskDeleteButton = ({ taskId, onDelete }) => {
    const handleDelete = () => {
        fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
        .then(response => {
            onDelete(taskId);
  });
    };

    return (
        <button onClick={handleDelete} className="delete-btn"> Delete </button>
    );
};
