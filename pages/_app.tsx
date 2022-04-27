import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Component {...pageProps} />
      <Head>
        <title>The nature of Ukraine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default MyApp
