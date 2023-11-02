import { useEffect, useState } from "react"
import { ArticleEntry } from "./NewsArticleEntry"
import { getAllNewsArticles } from "./NewsAPIManager"


export const NewsArticleList = ({articleEntries, updateArticleState}) => {

 
    return (
        <>
            {
                articleEntries.map((singleArticle) => <ArticleEntry key={`article--${singleArticle.id}`} singleArticle={singleArticle} updateArticleState={updateArticleState} />)
            }
        </>
    )

}