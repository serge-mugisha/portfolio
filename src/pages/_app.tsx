import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";



export default function App({ Component, pageProps }: AppProps) {
  usePageViews();

  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="Serge Mugisha's portfolio" />
      <title>Serge Mugisha</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <GoogleAnalytics />
    <Component {...pageProps} />
  </>
}
