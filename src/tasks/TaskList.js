import { useEffect, useState } from "react"

export const TaskList = () => {
                    const [tasks, setTasks] = useState([])
                            useEffect(
                                    () => {
                                        fetch(`http://localhost:8088/tasks`).then(response => response.json()).then((taskArray)=>{
                                        setTasks(taskArray)
                                        })
                                    },[]
                                        )
                                        return <>
                                        <h2> List Of Tasks</h2>
                                        <article className="task">
                                                            {
                                                                tasks.map(
                                                                    (task) => {
                                                                        return <section>
                                                                            
                                                                            <label>
                                                                                                <input type="checkbox"/>
                                                                                                {task.task}
                                                                            </label>
                                                                                        <button> Delete</button>
                                                                        </section>
                                                                    }
                                                                )

                                                            }


                                        </article>
                                        </>
                            }