export const getAllNewsArticles = () => {
    return fetch(`http://localhost:8088/articles`)
        .then(response => response.json())
}

const deleteArticleEntry = (id) => {
    return fetch(`  http://localhost:8088/articles/${id}`, 
    { method: "DELETE" })
}