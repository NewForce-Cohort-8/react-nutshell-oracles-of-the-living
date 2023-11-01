import React from "react"

export const chatList = ({id, userId, message }) => {

    useEffect(
        () => {
            fetch(`http://localhost:8088/ChatMessages`)
            .then(response => response.json())
            .then((messages) => {
                const singleEmployee = data[0]
                updateEmployee(singleEmployee)
        })
    },
        [employeeId]
    )


    return <section className="chatMessage">
    <div>
    <header className="chatHeader">Message from</header>

    </div>
    </section>
}