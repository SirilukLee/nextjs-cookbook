import Head from 'next/head'
import { useRouter } from 'next/router'
import NavigationBar from '@/ui/molecules/NavigationBar'
import styles from "../../styles/layout.module.scss"


export default function Layout({ children }: Partial<any>) {
    const navigation = [
        { title: 'Home', link: "/" },
        { title: 'Articles', link: '/articles' },
        { title: 'About', link: '/about' }
    ]

    return (
        <>
            <header className={styles.header}>
                NextJS. Cookbook
            </header>
            <nav>
                <NavigationBar navigation={navigation}/>
            </nav>
            <main>{children}</main>
            <footer className={styles.footer}>2022. All rights reserved</footer>
        </>

    )
}