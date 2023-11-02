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
        <header className="employee__header">Name: {employee?.user?.fullName}</header>
    <div>Email: {employee?.user?.email}</div>
    <div>Specialty: {employee.specialty}</div>
    <div>Rate: {employee.rate}</div>
    <footer className="employee__footer">Currently working on {employee?.employeeTickets?.length} tickets</footer>
    
    
</section>

}