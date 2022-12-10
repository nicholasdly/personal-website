import Head from 'next/head';
import Background from '../components/Background';
import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Nicholas Ly</title>
        <meta name='description' content="Nicholas Ly's developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Background />
      <Component {...pageProps} />
    </div>
  )
}
