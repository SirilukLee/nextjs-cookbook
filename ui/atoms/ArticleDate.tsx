import styles from "../../styles/Atoms.module.scss"
import { IDate } from "../ui-types"

const ArticleDate = ({date}: IDate) => {
return (
        <span className={styles.dates}>{date}</span>
    
)
}

export default ArticleDate;