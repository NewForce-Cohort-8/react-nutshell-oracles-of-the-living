import { Link } from "react-router-dom"


export const Message = ({message}) => {

   return <section className="message">
    <div>{message.user?.name}: {message.message} </div>
</section>

}