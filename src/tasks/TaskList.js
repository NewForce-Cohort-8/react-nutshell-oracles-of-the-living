import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCreateTaskButton } from "./TaskCreateTask";
import { TaskDeleteButton } from "./TaskDelete";
import { getAllTasks } from "./TaskApiManager";
import { Link } from "react-router-dom";
import "../tasks/tasks.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks().then((taskArray) => {
      setTasks(taskArray);
    });
  }, []);

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Toggle the completed status
      }
      return task;
    });

    setTasks(updatedTasks);

    // Simulated update to the backend
    updateTaskInDatabase(taskId, updatedTasks.find((task) => task.id === taskId).completed);
  };

  const updateTaskInDatabase = (taskId, completedStatus) => {
    // Simulated PUT request to your API
    fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: 'PUT', // or 'PATCH'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: completedStatus }),
    })
      .then((response) => {
        // Handle response (success/failure)
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <>
      <TaskCreateTaskButton />

      <div className="taskContainer">
        <div className="taskListCard">
          <h2>To-Do List</h2>
          <article className="tasklist">
            {tasks.map((task) => (
              <section key={task.id}>
                <header>
                  <Link to={`/tasks/${task.id}/edit`}>Edit {task.id}</Link>
                </header>

                <section className="task" key={task.id}>
                  <label className="checkbox-btn">
                    <input
                      id={`taskCheckbox_${task.id}`}
                      className="ckeckbox-btn"
                      type="checkbox"
                      onChange={() => handleCheckboxChange(task.id)}
                      checked={task.completed}
                    />
                    <span className="task-date">
                      {task.task} by {task.neededBy}
                    </span>
                  </label>
                </section>

                <TaskDeleteButton taskId={task.id} onDelete={handleTaskDelete} />
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};
