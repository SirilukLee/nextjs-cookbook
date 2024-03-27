import { useState } from "react"
import styles from "../../styles/Atoms.module.scss"
import { useSelector } from "react-redux"
import { changeArticleState, selectArticleState } from "../../store/articleSlice"
import { UseAppDisPatch } from "../../hooks"


const ArticleTitle = ({ title, isEdit }: { title: string, isEdit: boolean }) => {

    const [value, setValue] = useState(title)
    const currentArticle = useSelector(selectArticleState);
    const dispatch = UseAppDisPatch();

    const onChangeHandler = (event: Partial<any>) => {
        const value = event?.target.value;
        setValue(value)
        dispatch(changeArticleState({...currentArticle, title:value}))
       
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