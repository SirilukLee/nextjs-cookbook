
import { useEffect, useState } from "react";
import { IAddArticleButton, IArticle } from "../ui-types";
import { Labels } from "@/pages/core/configs";
import { UseAppDisPatch, useAppSelector } from "@/pages/hooks";
import { selectAuthState } from "../../pages/store/authSlice"
import styles from "../../styles/Atoms.module.scss"
import Link from "next/link";
import { changeArticleState } from "@/pages/store/articleSlice";
import ArticleEdit from "../molecules/ArticleEdit";
import ArticleModalCloseButton from "./ArticleModalCloseButton";

const AddArticleButton = ({ openModal }: IAddArticleButton) => {
    const [buttonLabel, setButtonState] = useState(Labels.SUBMIT);
    const [showModal, setModalState] = useState(false);
    const isLoggedIn = useAppSelector(selectAuthState)
    // console.log(JSON.parse(isLoggedIn))
    // const authDataAsString: string = JSON.stringify(authData);
    const dispatch = UseAppDisPatch();

    const newArticle = {
        id: -1,
        title: '',
        description: '',
        text: '',
        publishingDate: '',
        isNew: true
    }

    const saveData = (data: IArticle) => {
        console.log('data to save', data)
    }

    useEffect(() => {
        if (isLoggedIn) {
            setButtonState(Labels.ADD_ARTICLE)
        }
        dispatch(changeArticleState(newArticle));
    }, [newArticle]);



    return (
        <>
            {isLoggedIn &&
                <button className={styles.blueButton}
                    type="button" onClick={() => setModalState(true)}>
                    {Labels.ADD_ARTICLE}
                </button  >
            }

            {showModal &&
                <div id="edit" className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalContent__first}>
                            <ArticleEdit isEdit={true} article={newArticle} editArticle={saveData} />
                        </div>
                        <div>
                            <ArticleModalCloseButton closeModal={() => setModalState(false)} />
                        </div>
                    </div>
                </div>
            }

            {!isLoggedIn &&
                <Link className={styles.blueButton}
                    href="/login-page"
                >{Labels.SUBMIT}</Link>
            }

        </>

    )
}

// useEffect(()=> {
//     setButtonState(Labels.Add_Article);
// })

// dispatch(changeArticleState())



export default AddArticleButton