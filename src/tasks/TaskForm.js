import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TaskForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [task, update] = useState({
task: ""
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


        // TODO: Perform the fetch() to POST the object to the API
    }

    return (
        <form className="taskForm">
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
                
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={task.emergency}
                        onChange={} />
                </div>
            </fieldset> */}
            <button className="btn btn-primary">
                Submit Task
            </button>
        </form>
    )
}