import { ArticleEntry } from "./NewsArticleEntry"

export const NewsArticleList = ({articleEntries, updateArticleState}) => {

    const sortNewsCards = articleEntries.sort((a,b) => new Date(b.dateCreated) - new Date(a.dateCreated))

    return (
        <>
            {
               sortNewsCards.map((singleArticle) => <ArticleEntry key={`article--${singleArticle.id}`} singleArticle={singleArticle} updateArticleState={updateArticleState} />)
            }
        </>
    )

}