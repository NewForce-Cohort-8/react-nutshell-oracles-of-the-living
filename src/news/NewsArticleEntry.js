import { useState, useEffect } from "react"

export const ArticleEntry = ({ singleArticle, updateArticleState }) => {

    const [showForm, setShowForm] = useState(false)
    const [editArticle, setEditArticle] = useState({})

    useEffect(() => {
        setEditArticle(singleArticle)
    }, [])

    const handleControlledInputChange = (e) => {

        const newArticleEntry = { ...editArticle }

        newArticleEntry[`${e.target.name}`] = e.target.value

        setEditArticle(newArticleEntry)
    }

    const UpdateEntry = (e) => {
        e.preventDefault()

        const entryToSend = { ...editArticle }

        fetch(`http://localhost:8088/articles/${editArticle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryToSend),
        }).then(r => r.json)
            .then(updateArticleState)
            .then(() => setShowForm(false))
    }

    const deleteArticleEntry = (id) => {
        return fetch(`http://localhost:8088/articles/${id}`,
            { method: "DELETE" })
            .then(updateArticleState)

    }

    return <>
        {!showForm ?
        <div className="card-center w-75 mb-3">
            <div className="card text-center"> 
                <div className="card-header">
                    <p>{singleArticle.title}</p>
                </div>
                <div>URL: {singleArticle.url}</div>
                <div>Synopsis: {singleArticle.synopsis}</div>
                <button className="btn btn-primary" aria-label="edit" onClick={() => setShowForm(!showForm)}>Edit</button>
                <button className="btn btn-danger" aria-label="delete" onClick={() => deleteArticleEntry(singleArticle.id)}>Delete</button>



            </div>
            </div>
            :

            <div className="card">

                <div className="card-body">
                    <input name="title" type="text" placeholder="" value={editArticle.title} onChange={handleControlledInputChange}/>
                    <button className="btn btn-success" onClick={(e) => UpdateEntry(e)}> Save </button>
                    <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}> Cancel </button>
                </div>
                <div className="card-body">
                    <input name="url" className="textarea" placeholder="tell me about it ..." value={editArticle.url} onChange={handleControlledInputChange}></input>
                </div>
                <div>
                    <input name="synopsis" className="input" placeholder="tell me about it ..." value={editArticle.synopsis} onChange={handleControlledInputChange}></input>
                </div>

            </div >
        }
    </>

}



// <div className="card">
// <div className="card-body">
//     Title: {singleArticle.title}
// </div>
// <div className="card-body">
//     URL: {singleArticle.url}
// </div>
// <div className="card-body">
//     Synopsis: {singleArticle.synopsis}
// </div>
// </div>
// <button type="button" class="btn" onClick={() => { deleteArticleEntry(singleArticle.id) }}>Delete</button>