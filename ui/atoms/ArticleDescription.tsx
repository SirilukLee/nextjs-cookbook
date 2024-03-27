import { useState } from "react"
import styles from "../../styles/Atoms.module.scss"
import { useSelector } from "react-redux";
import { changeArticleState, selectArticleState } from "../../store/articleSlice";
import { UseAppDisPatch } from "../../hooks";

const AritcleDescription = ({ description, isEdit }: { description: string, isEdit: boolean }) => {
    const [value, setValue] = useState(description)
    const currentArticle = useSelector(selectArticleState);
    const dispatch = UseAppDisPatch();
    
    const onChangeHandler = (event: Partial<any>) => {
        const value = event?.target.value;
        setValue(value)
        dispatch(changeArticleState({...currentArticle,description:value}))

    }

    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>
                    {description}
                </span>
            }
            {isEdit &&
                <input type="text" value={value}
                    onChange={onChangeHandler} />
            }

        </div>
    )


}

export default AritcleDescription;