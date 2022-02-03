import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React + NextJS boilerplate</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="manifest" href="manifest.webmanifest" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, ReactJS, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App