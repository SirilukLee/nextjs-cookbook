import { Labels, LocalStorageKeys } from "../../pages/core/configs";
import styles from '../../styles/Atoms.module.scss';
import { IArticleActions } from "../ui-types";

const DeleteArticleButton = ({ deleteArticle }: IArticleActions) => {
    return (
        <button className={styles.deleteButton} type="button"
            onClick={() => deleteArticle?.()}>
            {Labels.DELETE}
        </button>
    )
}

export default DeleteArticleButton;