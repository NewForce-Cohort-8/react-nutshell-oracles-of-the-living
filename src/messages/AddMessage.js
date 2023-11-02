import React, { useState } from 'react';

export const AddMessage = () => {


    const localNutshellUser = localStorage.getItem("activeUser")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const [message, setMessage] = useState({
        userId: nutshellUserObject.id,
        message: ""
    });

    const postNewMessage = () => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())

    }


    const messageChange = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }






return (
        <div>
            <input
                type="text" name="message" value={message.message} onChange={messageChange} />
            <button onClick={postNewMessage}>Add Message</button>
        </div>
)


}