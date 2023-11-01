import { useEffect, useState } from "react"
import { ArticleEntry } from "./NewsArticleEntry"
import { getAllNewsArticles } from "./NewsAPIManager"


export const NewsArticleList = ({ deleteArticleEntry, updateArticleState }) => {

    const [articleEntries, setArticleEntries] = useState([])

    useEffect(
        () => {
            getAllNewsArticles()
                .then((articleArray) => {
                    setArticleEntries(articleArray)
                })
        },
        [] //where we observe state - if empty we are just watching intial component state
    )

    return (
        <>
            {
                articleEntries.map((singleArticle) => <ArticleEntry key={`article--${singleArticle.id}`} singleArticle={singleArticle} deleteArticleEntry={deleteArticleEntry} updateArticleState={updateArticleState} />)
            }
        </>
    )

}