import styles from "../../styles/atoms.module.scss"
import { IDate } from "../ui-types"

const ArticleDate = ({date}: IDate) => {
return (
        <span className={styles.dates}>{date}</span>
    
)
}

export default ArticleDate;