import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sellics Demo App</title>
        <meta name="description" content="Demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
  main page
      </main>
    </div>
  )
}
