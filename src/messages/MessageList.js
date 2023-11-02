import React, { useEffect, useState } from "react"
import { Message } from "./Message"

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages&userId=${messages.userId}`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
        },
        []
    )

    return <article className="messages">
    {
        messages.map(message => <Message key={`message--${message.id}`}
            id={message.id} 
            userId={message.userId} 
            message={message.message} />)
    }
</article>

}