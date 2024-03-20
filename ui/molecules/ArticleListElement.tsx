import { useState } from 'react';
import { Labels, LocalStorageKeys } from '../../pages/core/configs'
import styles from '../../styles/Atoms.module.scss';
import ArticleDate from '../atoms/ArticleDate'
import ArticleDescription from '../atoms/ArticleDescription'
import ArticleTitle from '../atoms/ArticleTitle';
import DeleteArticleButton from '../atoms/DeleteArticle';
import EditArticleButton from '../atoms/EditArticle';
import { IArticle } from '../ui-types';
import Link from 'next/link';

const ArticleListElement = ({ article, isLoggedIn }: { article: IArticle, isLoggedIn: boolean }) => {
    // console.log(article)
    return (
        <section className={styles.articleListElement}>
            <Link href={`/articles/${article.id}`} className={styles.linkToDiv}>
                <div><ArticleTitle isEdit={false} title={article.title} /></div>
                <div><ArticleDescription isEdit={false} description={article.description} /></div>
                <div><ArticleDate date={article.publishingDate} /></div>
            </Link>

            {isLoggedIn &&
                <div>
                    <div>
                        <EditArticleButton editArticle={() => {}} article={article}/><br />
                    </div>
                    <div>
                        <DeleteArticleButton deleteArticle={() => {}} /><br />
                    </div>
                </div>
            }
        </section>
    )
}

export default ArticleListElement;