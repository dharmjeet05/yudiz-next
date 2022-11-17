import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(true))
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </>
  )
}
