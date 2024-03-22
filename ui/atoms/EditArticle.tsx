import { useState } from 'react'
import { Labels, LocalStorageKeys } from "../../pages/core/configs";
import styles from '../../styles/Atoms.module.scss';
import { IArticleActions,IArticle  } from "../ui-types";
import ArticleEdit from '../molecules/ArticleEdit'
import ArticleModalCloseButton from './ArticleModalCloseButton';
import { UseAppDisPatch, useAppSelector } from "@/pages/hooks";
import { changeArticleState } from '@/pages/store/articleSlice';

const EditArticleButton = ({ editArticle, article }: { editArticle: () => void, article: IArticle }) => {
    const [showModal, setModalState] = useState(false);
    const dispatch = UseAppDisPatch();

    const saveArticle = async () => {
     //  dispatch(changeArticleState({...article, save:true}))
    }

    const apiCallMiddleware = (store: any) => (next:any)=>(action:any)=>{

    }

    return (
        <>
            <button className={styles.editButton} type="button"
                onClick={() => setModalState(true)}>
                {Labels.EDIT}
            </button>

            {showModal &&
                <div id="edit" className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalContent__first}>
                            <ArticleEdit isEdit={true} article={article} editArticle={saveArticle} />
                        </div>
                        <div>
                            <ArticleModalCloseButton closeModal={() => setModalState(false)} />
                        </div>
                        
                    </div>

                </div>


            }
        </>

    )
}

export default EditArticleButton;