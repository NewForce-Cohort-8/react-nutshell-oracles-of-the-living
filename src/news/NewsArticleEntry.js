export const ArticleEntry = (singleArticle) => {


    return <>
    <div className="card">
        <div className="card-body">
           Title: {singleArticle.title}
        </div>
        <div className="card-body">
            URL: {singleArticle.url}
        </div>
        <div className="card-body">
            Synopsis: {singleArticle.synopsis}
        </div>
    </div>
</>
    

}