import { useState } from "react"
import styles from "../../styles/Atoms.module.scss"
import { useSelector } from "react-redux"
import { changeArticleState, selectArticleState } from "@/pages/store/articleSlice"
import { UseAppDisPatch } from "@/pages/hooks"

const ArticleTitle = ({ title, isEdit }: { title: string, isEdit: boolean }) => {
    const [value, setValue] = useState(title)
    const currentArticle = useSelector(selectArticleState);
    const dispatch = UseAppDisPatch();

    const onChangeHandler = (event: Partial<any>) => {
        const value = event?.target.value;
        dispatch(changeArticleState({...currentArticle,title}))
    }


    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>
                    {title}
                </span>
            }
            {isEdit &&
                <input type="text" value={value}
                    onChange={onChangeHandler} />
            }

        </div>
    )


}

export default ArticleTitle