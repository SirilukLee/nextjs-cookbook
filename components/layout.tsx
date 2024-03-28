import dynamic from 'next/dynamic'
import NavigationBar from '../ui/molecules/NavigationBar'
import styles from "../styles/Layout.module.scss"
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Layout({ children }: Partial<any>) {
    const navigation = [
        {
            title: 'Home', link: "/", meta: {
                title: 'This is main page',
                description: 'This is main description'
            }
        },
        {
            title: 'Articles', link: '/articles', meta: {
                title: 'This is articles page',
                description: 'This is articles description'
            }
        },
        {
            title: 'About', link: '/about', meta: {
                title: 'This is about page',
                description: 'This is about description'
            }
        }
    ]

    const router = useRouter();
    const meta = navigation.find(element => element.link === router.pathname)
    //console.log('meta', meta)

    // const isCopy = route === '/articles' ? 'Copy': ''

    // const NavigationBar = dynamic(() => import('../ui/molecules/NavigationBar'),
    //     { loading: () => <p>Loading navigation...</p> })

    //Lazy loaded Wrapped
    // const NavigationBarWrapper = dynamic(
    //     () => import('../ui/molecules/NavigationBar').then((component) => component.default),
    //     { ssr: false }
    // )

    return (
        <>
            <Head>
                <title>
                    {meta?.meta.title}
                </title>
                <meta name="description" content={meta?.meta.description} />
                <meta property="og:title" content={meta?.meta.title} />
                <meta property="og:description" content={meta?.meta.description} />
                <meta property="og:URL" content="https://nextjs-cookbook.site/" />
                <meta property="og:type" content="website" />
            </Head>
            <header className={styles.header}>
                NextJS. Cookbook
            </header>
            <nav>
                <NavigationBar navigation={navigation} />
                {/* <NavigationBarWrapper navigation={navigation} /> */}
            </nav>
            <main>{children}</main>
            <footer className={styles.footer}>2022. All rights reserved</footer>
        </>

    )
}