import { useState } from 'react'
import styles from "../../styles/Atoms.module.scss"
import { useSelector } from 'react-redux';
import { changeArticleState, selectArticleState } from '../../pages/store/articleSlice';
import { UseAppDisPatch } from '../../pages/hooks';

const ArticleText = ({ text, isEdit }: { text: string, isEdit: boolean }) => {
   
    const [value, setValue] = useState(text)
    const currentArticle = useSelector(selectArticleState);
    const dispatch = UseAppDisPatch();
    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value;
        setValue(value)
        dispatch(changeArticleState({...currentArticle,text:value}))
    }

    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>{text}</span>
            }

            {isEdit &&
                <textarea onChange={onChangeHandler} value={value}></textarea>
            }

        </div>
    )
}

export default ArticleText;