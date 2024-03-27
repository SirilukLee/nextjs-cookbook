import type { NextPage } from 'next'
import ArticleListElement from '../../ui/molecules/ArticleListElement'
import { Fragment } from 'react'
import { selectAuthState } from '../../store/authSlice'
import { useAppSelector } from '../../hooks'
import { IListPage } from '@/ui/ui-types'
import axios from 'axios'

const ListPage: NextPage = ({ data, notFound }: IListPage) => {
    const isLoggedIn = useAppSelector(selectAuthState);


    return (
        <section>
            <h1>Articles list</h1>
            {
                data?.map((item: any) => {
                    return (
                        <Fragment key={item.id}>
                            <ArticleListElement isLoggedIn={isLoggedIn}
                                article={item}
                            />
                        </Fragment>
                    )
                })

            }

            {
                notFound && <span>No Ariticle found</span>
            }
        </section>
    )
}



export async function getServerSideProps() {
    try {
        const { data } = await axios.get<any>(
            'http://localhost:3000/api/articles'
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

export default ListPage