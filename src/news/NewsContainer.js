import { NewsArticleList } from "./NewsArticleList"
import { NewsForm } from "./NewsForm"
import { useEffect, useState } from "react"
import { getAllNewsArticles } from "./NewsAPIManager"


export const NewsContainer = () => {

    const [articleEntries, setArticleEntries] = useState([])

    const updateArticleState = () => {
        return getAllNewsArticles()
          .then((articleArray) => {
            setArticleEntries(articleArray)
          })
          .then()
        }

    useEffect(
        () => {
       updateArticleState()
                
        },[] //where we observe state - if empty we are just watching intial component state
    )

    return (
        <>
        <div className="container-md">
        <NewsForm   updateArticleState={updateArticleState}   />
        </div> 
        <div className="container-sm">
        <NewsArticleList   articleEntries={articleEntries}  updateArticleState={updateArticleState}/>
        </div>
        </>
    )
}