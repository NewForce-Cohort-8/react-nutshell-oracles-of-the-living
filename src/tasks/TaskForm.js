import { useState } from "react"//literally copy and pasted from book6 Ticket list 1-2 boilerplate code 
import { useNavigate } from "react-router-dom"

export const TaskForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [task, update] = useState({
task: "",
neededBy: ""
// emergency: false
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
const navigate = useNavigate()
        const localNutshellUser = localStorage.getItem("activeUser");
        const nutshellUserObject = JSON.parse(localNutshellUser);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        // "userId": 3,"neededBy": "1111-11-11",
        // "task": "Take out garbage", "dateCompleted": "Fri Apr 29 2022 14:02:20 ", "emergency": false }
const taskToSendToAPI ={
    userId: nutshellUserObject.id,
    neededBy: task.neededBy,
    task: task.task,
    completed: false,
    dateCompleted: ""
}
        // TODO: Perform the fetch() to POST the object to the API
        return fetch(` http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSendToAPI)
        }).then(response => response.json()).then(()=>{
            navigate("/tasks")
        })
    }

    return (
        <form className="taskForm">
             {/* /////////////////////////////////////////////////////// Task by Juan : manipulated honeyraerepair code from book 6 to fit this project  */}
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Task Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of task"
                        value={task.task}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.task = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div class="">
                    <label className="labelDate" htmlForfor="serviceDate">Date needed To be Completed</label>
                    <input 
                    
                    type="date"
                    className="form-date"
                     value={task.neededBy} 
                     onChange={
                        (evt) => {
                            const copy2 = {...task}
                            copy2.neededBy = evt.target.value
                            update(copy2)
                        }
                    } 
                      />
                </div>
                
            </fieldset>
            
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>///////////////did not want this from honeyraerepair and maybe I do 
                    <input type="checkbox"
                        value={task.emergency}
                        onChange={} /> //event.target.checked not value
                </div>
            </fieldset> */}
            
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Task
            </button>
        </form>
    )
}