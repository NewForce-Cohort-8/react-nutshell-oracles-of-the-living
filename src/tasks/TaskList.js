import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
        const [tasks, setTasks] = useState([])
        const navigate = useNavigate()

                    const localNutshellUser = localStorage.getItem("activeUser");
	                const nutshellUserObject = JSON.parse(localNutshellUser);

                            useEffect(
                                    () => {
                                        fetch(`http://localhost:8088/tasks`).then(response => response.json()).then((taskArray)=>{
                                        setTasks(taskArray)
                                        })
                                    },[]
                                        )
                                        return <>
                                        <button onClick={() => navigate("/task/create")}>Create Task</button>
                                        <h2> List Of Tasks</h2>
                                        <article className="task">
                                                            {
                                                                tasks.map(
                                                                    (task) => {
                                                                        return <section>
                                                                            
                                                                            <label>
                                                                                                {/* <input type="checkbox"/> */}
                                                                                                {task.task}
                                                                            </label>
                                                                                        {/* <button> Delete</button> */}
                                                                        </section>
                                                                    }
                                                                )

                                                            }


                                        </article>
                                        </>
                            }