import Head from 'next/head';
import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="transition duration-500">
      <Head>
        <title>My Next App</title>
        <meta name='description' content='This is a desription for My Next App'/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
