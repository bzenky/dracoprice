import Head from 'next/head'
import { Header } from '../components/header'
import { Price } from '../components/price'

import styles from '../styles/app.module.scss'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Draco Price</title>
        <meta name="description" content="Draco Price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Price />
      </main>
    </div>
  )
}
