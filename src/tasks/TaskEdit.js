import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TaskEdit = () => {
    const [task, assignTask] = useState({
        task: "",
        neededBy:""
    })
    const { taskId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(response => response.json())
            .then((data) => {
                assignTask(data)
            })
    }, [taskId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/tasks")
            })
    }


    return (
        <div className="formContainer">
  <div className="taskFormCard">
        <form className="taskForm">
          <h2 className="taskForm__title">Edit Task</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="description"> Change Task:</label>
              <textarea
                required
                autoFocus
                className="form-control"
                value={task.task}
                onChange={(evt) => {
                  const copy = { ...task };
                  copy.task = evt.target.value;
                  assignTask(copy);
                }}
              ></textarea>
            </div>
            <div class="">
              <label className="labelDate" htmlFor="serviceDate">
                Change Date : 
              </label>
              <input
                type="date"
                className="form-date"
                value={task.neededBy}
                onChange={(evt) => {
                  const copy2 = { ...task };
                  copy2.neededBy = evt.target.value;
                  assignTask(copy2);
                }}
              />
            </div>
          </fieldset>
          <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary"
          >
            Save Edits
          </button>
        </form>
        </div>
        </div>
      );
    };