import Head from 'next/head';
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import '../styles/tailwind.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <motion.dev initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
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
        <Navigation />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.dev>
  )
}
