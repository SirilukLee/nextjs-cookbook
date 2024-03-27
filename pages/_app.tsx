import { Amplify, ResourcesConfig } from "@aws-amplify/core";
import "@/styles/globals.scss";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import { useEffect } from "react";
import { getFromStorageByKey } from "./api/core/local-storage";
import { LocalStorageKeys } from "../core/configs";
import { changeAuthState } from "../store/authSlice";
import { UseAppDisPatch } from "../hooks";
// import { store } from "./store";
import de from "../lang/de.json";
import en from "../lang/en.json";
import th from "../lang/th.json"
import { IntlProvider, createIntl } from "react-intl";
import { useRouter } from "next/router";
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

interface AmplifyConfig extends ResourcesConfig {
  ssr?: boolean;
}
// Your configuration
const config: AmplifyConfig = {
  ...Amplify.resourcesConfig,
  ssr: true
};

// Call Amplify.configure() with your config
Amplify.configure(config);

const messages: any = {
  de,
  en,
  th
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)

  // const body = JSON.stringify(metric)
  // const url = 'https://example.com/analytics'

  // if (navigator.sendBeacon) {
  //   navigator.sendBeacon(url, body)
  // } else {
  //   fetch(url, {body, method : 'POST', keepalive: true})
  // }
}

// Example Google Tag manager to store the browser metrics
// export function reportWebVitals({id, name, label, value}:any) {
//   window.gtag('event', name, {
//     event_category:
//     label === 'web-vital'? 'Web Vitals': 'Next.js custom metric',
//     value: Math.round(name === 'CLS'? value*100 : value),
//     event_label: id,
//     non_interaction: true
//   })
// }



export default function CookBook({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    const authFromStorage = getFromStorageByKey(LocalStorageKeys.LOGIN)

    if (authFromStorage) {
      // console.log(authFromStorage)
      store.dispatch(changeAuthState(authFromStorage));
    }

  }, [store])

  // const { locale } = useRouter();
  const locale = 'en'; // Set your desired locale here

  const intl = createIntl({
    locale,
    messages,
  });

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
