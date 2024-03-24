import { Labels } from '../../pages/core/configs';
import styles from '../../styles/Atoms.module.scss';
import { IArticle, IArticleActions } from '../ui-types';

const ArticleModalSaveButton = ({saveArticle}:{saveArticle: () => void}) => {
    const input = {
        label: Labels.SAVE
    }
    console.log(saveArticle)

    return (
        <button type="submit" className={styles.editButton}>{input.label}</button>
    )

}

export default ArticleModalSaveButton;
