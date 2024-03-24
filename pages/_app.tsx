import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { wrapper } from "./store";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import { useEffect } from "react";
import { getFromStorageByKey } from "./api/core/local-storage";
import { LocalStorageKeys } from "./core/configs";
import { changeAuthState } from "./store/authSlice";
import { UseAppDisPatch } from "./hooks";
// import { store } from "./store";
import de from "../lang/de.json";
import en from "../lang/en.json";
import th from "../lang/th.json"
import { IntlProvider, createIntl } from "react-intl";
import { useRouter } from "next/router";
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
const messages: any = {
  de,
  en,
  th
}
console.log(messages)
export default function CookBook({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    const authFromStorage = getFromStorageByKey(LocalStorageKeys.LOGIN)

    if (authFromStorage) {
      console.log(authFromStorage)
      store.dispatch(changeAuthState(authFromStorage));
    }

  }, [store])

  // const { locale } = useRouter();
  const locale = 'en'; // Set your desired locale here

  const intl = createIntl({
    locale,
    messages,
  });
  console.log(intl)
  //const localeToString = locale as string;
  // console.log(localeToString)

  return (
    <Provider store={store}>
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]} >
          <Component {...pageProps} />
        </IntlProvider>
      </Layout>
    </Provider>
  )
}
