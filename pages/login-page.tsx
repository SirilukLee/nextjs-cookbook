import type { NextPage } from "next";
import Link from "next/link"
import styles from "../styles/LoginForm.module.scss"
import LoginForm from "../ui/molecules/LoginForm"
import { store } from "../pages/store"
import { Provider } from "react-redux";

const LoginPage: NextPage = () => {
    return (
        <article className="content">
            <Provider store={store}>
                <LoginForm />
            </Provider>

            {/* <Link href="/">Main</Link> */}
        </article>

    )
}

export default LoginPage