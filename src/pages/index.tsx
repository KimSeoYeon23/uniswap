import Head from 'next/head'
import { Header } from '@/components/common'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uniswap Interface</title>
        <meta name="description" content="Uniswap Interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
