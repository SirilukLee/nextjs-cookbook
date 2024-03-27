import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/About.module.scss';


const About: NextPage = () => {

    return (

        <div className={styles.container}>
            <h1>Hello there! This is About Page of CookBook</h1>
            <Link href='/' className={styles.link}>Main</Link>
        </div>


    )
}



export default About;