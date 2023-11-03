import { useState } from "react"
import { ArticleEntry } from "./NewsArticleEntry"
import './NewsForm.css'

export const NewsForm = ({ updateArticleState }) => {


    const [articleEntry, setArticleEntry] = useState({})

    const handleControlledInputChange = (e) => {

        const newArticleEntry = { ...articleEntry }

        newArticleEntry[`${e.target.id}`] = e.target.value

        setArticleEntry(newArticleEntry)
    }

    const saveEntry = (e) => {

        e.preventDefault()

        const entryToSend = { ...articleEntry }
        entryToSend.userId = 1


        fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryToSend),
        }).then(updateArticleState)
    }


    return <>
        <div className="newsContainer">
            <form className="newsform" onSubmit={saveEntry}>
                <div className="mb-3">
                    <h2> Save a News Article </h2>
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title"  placeholder="Title of Article" aria-describedby="title" value={articleEntry.title} onChange={handleControlledInputChange} />
                </div>
                <div className="mb-3">
                    <label for="url" className="form-label">URL</label>
                    <input type="text" className="form-control" id="url" placeholder="Copy & Paste URL Here" value={articleEntry.url} onChange={handleControlledInputChange} />
                </div>
                <div className="mb-3">
                    <label for="synopsis" className="form-label">Synopsis</label>
                    <input type="text" className="form-control" id="synopsis" placeholder="What did you think?" value={articleEntry.synopsis} onChange={handleControlledInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </>

}