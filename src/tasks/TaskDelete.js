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

export const TaskDeleteButton = ({ taskId }) => {
    const handleDelete = () => {
        fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                // Handle deletion success, such as updating the UI or task list
                // For example, you can update the task list after deletion by fetching the updated list from the server
            } else {
                // Handle error cases if deletion fails
                // For instance, display an error message or handle the error accordingly
            }
        })
        .catch(error => {
            // Handle network errors or other issues
        });
    };

    return (
        <button onClick={handleDelete} className="delete-btn"> Delete </button>
    );
};
