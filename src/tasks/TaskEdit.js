import { useEffect, useState } from "react" //copied from book6 boilerplate code 
import { useNavigate, useParams } from "react-router-dom"
import { getTask, getTaskEdit, updateTaskEdit } from "./TaskApiManager";

export const TaskEdit = () => {
    const [task, assignTask] = useState({
        task: "",
        neededBy:""
    })
    const { taskId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getTaskEdit(taskId)
            .then((data) => {
                assignTask(data)
            })
    }, [taskId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

  updateTaskEdit(taskId, task)
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
                id="description"
                className="form-control"
                value={task.task}
                onChange={(evt) => {
                  const copy = { ...task };
                  copy.task = evt.target.value;
                  assignTask(copy);
                }}
              ></textarea>
            </div>
            <div className="task-date">
              <label className="labelDate" htmlFor="serviceDate">
                Change Date : 
              </label>
              <input
              id="serviceDate"
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