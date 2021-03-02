import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App Broadcasting tests</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Deep linking</h3>
        <Link href="/client/3" >Client</Link>
        <Link href="/client/3/article/34" >Article 34 direct</Link>
      </main>

      <footer className={styles.footer}>
        <h4>This is the footer</h4>
      </footer>
    </div>
  )
}
