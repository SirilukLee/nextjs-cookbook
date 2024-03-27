import type { NextPage } from "next";
import Link from "next/link"
import styles from "../styles/LoginForm.module.scss"
import LoginForm from "../ui/molecules/LoginForm"
import { store } from "../store"
import { Provider } from "react-redux";

const LoginPage: NextPage = () => {
    return (
        <article className="content">
            <Provider store={store}>
                <LoginForm />
            </Provider>
        </article>

    )
}

export default LoginPage