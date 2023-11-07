
import React, { useEffect, useState} from "react"
import { Message } from "./Message"
import "../messages/messages.css"
import { AddMessage } from "./AddMessage"

export const MessageList = () => {
    const [messages, setMessages] = useState([])

/*const getMessageWithExpandedUser = () => {
 return fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
}*/

    useEffect(
        () => {
            //getMessageWithExpandedUser()
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
        },
        []
    )

    return <article className="messages">

    <section>
    <header className="message-header">📝Message Board📝</header>
    <div className="message-box">{messages.map(message => <Message key={`message--${message.id}`} message={message}  />)}</div>
    </section>
    
</article>

}
