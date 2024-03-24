import { IArticleEdit } from "../ui-types"
import ArticleDescription from '../atoms/ArticleDescription'
import ArticleTitle from "../atoms/ArticleTitle"
import ArticleText from "../atoms/ArticleText"
import ArticleModalSaveButton from "../atoms/ArticleModalSaveButton"

const ArticleEdit = ({ article, isEdit, editArticle }: IArticleEdit) => {
    
    return (
        <>
            <ArticleTitle title={article.title} isEdit={true} />
            <ArticleDescription description={article.description} isEdit={true} />
            <ArticleText text={article.text} isEdit={true} />
            <ArticleModalSaveButton saveArticle={editArticle} />
        </>
    )
}

export default ArticleEdit;