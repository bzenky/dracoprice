import Head from 'next/head'
import { Header } from '../components/header'
import { Price } from '../components/price'

import styles from '../styles/app.module.scss'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Draco Price</title>
        <meta name="description" content="Simple Page with real time Draco Price." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Price />
      </main>
    </div>
  )
}
