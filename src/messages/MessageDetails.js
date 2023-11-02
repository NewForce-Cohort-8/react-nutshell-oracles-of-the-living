import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MessageDetails = () => {
    const {messageId} = useParams() 
    const [message, updateMessage] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages`)
            .then(response => response.json())
            .then((data) => {
                const singleMessage = data[0]
                updateMessage(singleMessage)
        })
    },
        [messageId]
    )

    return <section className="message">

    
    
</section>

}