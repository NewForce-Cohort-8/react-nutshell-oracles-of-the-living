
import React, { useEffect, useState } from "react"
import { Message } from "./Message"

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
        },
        []
    )

    return <article className="messages">


    <header></header>
    <div>{messages.map(message => <Message key={`message--${message.id}`} message={message} />)}</div>
    
</article>

}
