import axios from "axios";
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import ArticleDate from "@/ui/atoms/ArticleDate";
import ArticleText from "@/ui/atoms/ArticleText";
import DeleteArticleButton from "@/ui/atoms/DeleteArticle";
import EditArticleButton from "@/ui/atoms/EditArticle";
//import { selectAuthState } from  "../store/authSlice";
import styles from "../../styles/Article.module.scss";
import BackToListButton from "../../ui/atoms/BackToList";
import { useRouter } from 'next/router';
import ArticleTitle from "@/ui/atoms/ArticleTitle";

const ArticlePage: NextPage = ({ data, notFound }: any) => {
    // const isLoggedIn = useSelector(selectAuthState);
    const isLoggedIn = true;
    const router = useRouter();
    const routeBack = () => {
        router.push('/articles')
    }

    return (
        <section className={styles.section}>
            <div>
                <div className="">
                    <BackToListButton backToList={() => routeBack()} />
                    <h1>
                        <ArticleTitle title={data.title} isEdit={false} />
                    </h1>
                </div>
                <p>
                    <ArticleText text={data.content} isEdit={false} />
                </p>
                <div>
                    <ArticleDate date={data.createdAt} />
                </div>
            </div>
            {
                isLoggedIn &&
                <div>
                    <div>
                        <EditArticleButton article={data} editArticle={() => { }} /><br />
                    </div>
                    <div>
                        <DeleteArticleButton deleteArticle={() => { }} /><br/>
                    </div>
                </div>
            }
        </section>

    )


}

export async function getServerSideProps(context:any) {

    const { pid } = context.query

    try {
        const { data } = await axios.get<any>(
            'http://localhost:3000/api/articles/' + pid
        )

        if (!data) {
            return {
                props: { notFound: true }
            }
        }
        return {
            props: { data }
        }
    } catch (error) {
        return {
            props: {
                notFound: true
            }
        }
    }
}

export default ArticlePage;