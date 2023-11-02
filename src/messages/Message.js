import { Link } from "react-router-dom"

export const Message = ({id, userId, message}) => {

   return <section className="message">
    <div>
        <Link to={`/messages/${id}`}>Messages</Link>
    </div>
    <div> {userId}</div>
    <div> {message}</div>
    
</section>

}