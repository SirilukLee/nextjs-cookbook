import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { NextPage } from 'next'

const Home : NextPage = () => {
    const intl = useIntl();

    const title = intl.formatMessage({id: "page.home.head.title"})
    
    return (

        <div>
            <h1>Hello there ! This is the main page of CookBook</h1>
            <h2>{title}</h2>
        </div>

    )
}



export default Home