import { useEffect, useState, useCallback } from "react" // i basically copied honey-rae-repiar for this 
import { useNavigate } from "react-router-dom";
import { TaskCreateTaskButton } from "./TaskCreateTask";
import { TaskDeleteButton } from "./TaskDelete";
import { getAllTasks } from "./TaskApiManager";
import { Link } from "react-router-dom";
import "../tasks/tasks.css"

export const TaskList = () => {
        const [tasks, setTasks] = useState([]);
        const navigate = useNavigate();
        const localNutshellUser = localStorage.getItem("activeUser");
	    const nutshellUserObject = JSON.parse(localNutshellUser);

                                            // start of useEffect for fetching data drom api
                            useEffect( () => {
                                        getAllTasks()
                                .then((taskArray)=>{
                                        setTasks(taskArray)
                                        })
                                    },[] ) // end of useEffect 

                                            const handleTaskDelete = (taskId) => {const updatedTasks = tasks.filter((task) => task.id !== taskId);
                                            setTasks(updatedTasks); };

                                                            return <>
                                                 {/* i imported the taskCreatebuttona component above and invoked it into here */}
                                                                        <TaskCreateTaskButton/> 

                                                                        <div className="taskContainer">
                                                                        <div className="taskListCard">
                                                                         <h2> To-Do List </h2>
                                                                            <article className="tasklist">
                                                                                        {      tasks.map( (task, checkbox) => {
                                                                                                                            return <>
                                                                                                                            <header>
                                                                                                                            {/* //this liink is for editing tasks */}
                                                                                                                                <Link to={`/tasks/${task.id}/edit`}>edit {task.id}</Link> 
                                                                                                                            </header>

                                                                                                                            <section className="task" key={checkbox}>  
                                                                                                                                                            {/* /// key is checkbox */}
                                                                                                                                    <label>  
                                                                                                                                            <input className="ckeckbox-btn" type="checkbox" onChange={()=>{
                                                                                                                                                const updatedTasks = [...tasks];
                                                                                                                                                updatedTasks[checkbox].completed = !updatedTasks[checkbox].completed
                                                                                                                                                setTasks(updatedTasks)
                                                                                                                                             }} /> 
                                                                                                                                     {/* //for checkbox to work */}
                                                                                                                                            {!task.completed ? (   
                                                                                                                                                
                                                                                                                                                <span className="task-date">
                                                                                                                                            {/* The <span> tag is  like <div> element, but better for css */}
                                                                                                                                                { task.task} by {task.neededBy} 
                                                                                                                                                </span>
                                                                                                                                            ) : null}
                                                                                                                                    <br></br>
                                                                                                                                            <TaskDeleteButton taskId={task.id} onDelete={handleTaskDelete}/>
                                                                                                                                    </label>

                                                                                                                                </section>
                                                                                                                                </>
                                                                                                                        }
                                                                                                                    )
                                                                                                           }
                                                                                     </article>
                                                                                    </div>
                                                                                    </div>
                                                                                    </>
                                                                        }