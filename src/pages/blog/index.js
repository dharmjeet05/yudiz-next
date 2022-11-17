import { queryTypes, useQueryState } from 'next-usequerystate'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useProducts } from '../../queries/useProducts'
import styles from '../../styles/Home.module.css'

export default function Blog() {
  const [page, setPage] = useQueryState('page', queryTypes.integer.withDefault(1))
  const [limit, setLimit] = useState(10)

  const router = useRouter()

  console.log('router', router)

  const products = useProducts(page, limit)

  useEffect(() => {
    if (router?.query?.page) {
      setPage(router?.query?.page)
    }
  }, [router?.query?.page, setPage])
  

  console.log('products?.data', products?.data)

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.container}>
        <h1><span onClick={() => setPage(page - 1)}>-</span>{page}<span onClick={() => setPage(page + 1)}>+</span></h1>
      </div>
    </>
  )
}