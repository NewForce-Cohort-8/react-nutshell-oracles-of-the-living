import { useNavigate } from "react-router-dom"; //I stole this from Juan
import { deleteMessage } from "./MessageAPIManager";



export const MessageDeleteButton = ({ messageId, onDelete }) => {
    
    const pageReload = () => {
        window.location.reload();
    }
    
    const handleDelete = () => {
        deleteMessage(messageId)
        .then(pageReload())
    };

    return (
        <button onClick={handleDelete} className="delete-btn"> Delete </button>
    );
};