import Head from 'next/head'
import { Header } from '../components/header'
import { Price } from '../components/price'

export default function Home() {
  return (
    <div>
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
