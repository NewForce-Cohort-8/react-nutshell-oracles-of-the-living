import { useEffect, useState, useCallback } from "react" // i basically copied honey-rae-repiar for this 
import { useNavigate } from "react-router-dom";
import { TaskCreateTaskButton } from "./TaskCreateTask";
import "../tasks/tasks.css"

export const TaskList = () => {
        const [tasks, setTasks] = useState([]);
            const navigate = useNavigate();
                    const localNutshellUser = localStorage.getItem("activeUser");
	                const nutshellUserObject = JSON.parse(localNutshellUser);
                            useEffect(
                                    () => {
                                        fetch(`http://localhost:8088/tasks`).then(response => response.json()).then((taskArray)=>{
                                        setTasks(taskArray)
                                        })
                                    },[]
                                        ) // end of useEffect is here 
                 return <>
                 {/* added button to navigate to another page */}
                      {/* <button className="create-task-btn" onClick={() => navigate("/task/create")}>Create Task</button>  */}
                             <TaskCreateTaskButton/>
                             <div className="taskContainer">
                             <div className="taskListCard">
                             <h2> List Of Tasks</h2>
                                 <article className="tasklist">
                                              {                           ///added this "checkbox" for show/noshow after checked          
                                                         tasks.map( (task, checkbox) => {
                                                                                return <section className="task" key={checkbox}>  
                                                                                                                 {/* /// key is checkbox */}
                                                                                         <label>  
                                                                                            <input className="ckeckbox-btn" type="checkbox" onChange={()=>{
                                                                                            const updatedTasks = [...tasks];
                                                                                            updatedTasks[checkbox].completed = !updatedTasks[checkbox].completed
                                                                                            setTasks(updatedTasks)
                                                                                         }}/> 

                                                                                         {!task.completed ? (
                                                                                            <span className="task-date">
                                                                                              {task.task} / Complete By {task.neededBy}
                                                                                            </span>
                                                                                          ) : null}
                                                                                          </label>
                                                                                    </section> 
                                                                               }
                                                                      )

                                                 }


                                        </article>
                                        </div>
                                        </div>
                                        </>
                            }