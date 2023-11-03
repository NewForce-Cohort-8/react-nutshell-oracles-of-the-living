import { useState, useEffect } from "react"
import "./NewsCard.css"

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
            <>
                <div class="card text-center">
                    <div class="card-header">
                        {singleArticle.title}
                    </div>
                    <div class="card-body">
                        <h2 class="card-text">{singleArticle.synopsis}</h2>
                        <p class="card-text">{singleArticle.url}</p>
                    </div>
                    <button className="btn btn-primary" aria-label="edit" onClick={() => setShowForm(!showForm)}>Edit</button>
                    <button className="btn btn-success" aria-label="delete" onClick={() => deleteArticleEntry(singleArticle.id)}>Delete</button>
                </div>

            </>

            :

            <div className="card text-center">

                <div className="card-header">
                    <h4> Edit Entry: </h4>
                    <input name="title" type="text" className="form-control" placeholder="" value={editArticle.title} onChange={handleControlledInputChange} />
                </div>
                <div className="card-body">
                    <input name="synopsis" className="form-control" placeholder="tell me about it ..." value={editArticle.synopsis} onChange={handleControlledInputChange}></input>
                    <input name="url" className="form-control" placeholder="tell me about it ..." value={editArticle.url} onChange={handleControlledInputChange}></input>
                </div>
                <button className="btn btn-success" onClick={(e) => UpdateEntry(e)}> Save </button>
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}> Cancel </button>
            </div >
        }
    </>

}