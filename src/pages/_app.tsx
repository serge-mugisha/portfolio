import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ReactGA from 'react-ga';


export default function App({ Component, pageProps }: AppProps) {

  const TrackingID = "G-Q34F93E2QD"
  ReactGA.initialize(TrackingID);

  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="Serge Mugisha's portfolio" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <title>Serge Mugisha</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}
