import { useState } from "react"
import { ArticleEntry } from "./NewsArticleEntry"
import './NewsForm.css'

export const NewsForm = ({updateArticleState}) => {
    
   
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


    return <> <form className="newsform" onSubmit={saveEntry}>
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="title" value={articleEntry.title} onChange={handleControlledInputChange} />
        </div>
        <div className="mb-3">
            <label for="url" className="form-label">URL</label>
            <input type="text" className="form-control" id="url" value={articleEntry.url} onChange={handleControlledInputChange} />
        </div>
        <div className="mb-3">
            <label for="synopsis" className="form-label">Synopsis</label>
            <input type="text" className="form-control" id="synopsis" value={articleEntry.synopsis} onChange={handleControlledInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </>

}