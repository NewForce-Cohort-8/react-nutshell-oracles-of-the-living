export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
        .then(res => res.json())
}
export const getTaskEdit = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(response => response.json());
};

export const updateTaskEdit = (taskId, taskData) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskData)
    }).then(response => response.json());
};
export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    });
};
