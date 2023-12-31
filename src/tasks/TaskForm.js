import { useState } from "react"//literally copy and pasted from book6 Ticket list 1-2 boilerplate code 
import { useNavigate } from "react-router-dom"
import { getTaskForm } from "./TaskApiManager";
import "../tasks/tasks.css"

export const TaskForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [task, update] = useState({
task: "",
neededBy: ""

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
        getTaskForm(taskToSendToAPI).then(()=>{
            navigate("/tasks")
        })
    }

    return (
        <div className="formContainer">
  <div className="taskFormCard">
        <form className="taskForm">
             {/* /////////////////////////////////////////////////////// Task by Juan : manipulated honeyraerepair code from book 6 to fit this project  */}
            <h2 className="taskForm-title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Task Name:</label>
                    <input required autoFocus type="text" className="form-control" id="description" placeholder="Brief description of task"
                        value={task.task} onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.task = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div className="task">
                    <label className="labelDate" htmlFor="serviceDate">Date needed To be Completed</label>
                    <input 
                    id="serviceDate"
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
    
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Task
            </button>
        </form>
        </div>
        </div>
    )
}