import { Link } from "react-router-dom"
import { MessageDeleteButton } from "./MessageDelete"


export const Message = ({message}) => {
    const localNutshellUser = localStorage.getItem("activeUser")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    if (message.user?.id === nutshellUserObject.id){
    return <section className="message">
    <div className="user-button">{message.user?.name}: {message.message} <MessageDeleteButton messageId={message.id} /></div>
    
</section>
    }
    return <div className="message">{message.user?.name}: {message.message}</div>

}