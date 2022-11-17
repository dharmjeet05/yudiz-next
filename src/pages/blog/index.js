import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { queryTypes, useQueryState } from 'next-usequerystate'

import { useProducts } from '../../queries/useProducts'
import styles from '../../styles/Home.module.css'

export default function Blog() {
  const [page, setPage] = useQueryState('page', queryTypes.integer.withDefault(1))
  const [limit, setLimit] = useQueryState('limit', queryTypes.integer.withDefault(10))

  const router = useRouter()

  const products = useProducts(page, limit)

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page)
    }
  }, [router.query.page, setPage])

  useEffect(() => {
    if (router.query.limit) {
      setLimit(router.query.limit)
    }
  }, [router.query.limit, setLimit])

  function handleChange(e, type) {
    switch (type) {
      case "limit":
        setLimit(e.target.value)
        setPage(1)
        break
      default:
        break
    }
  }

  console.log('products?.data', products?.data)

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.container}>
        <h1><span onClick={() => setPage(page - 1)}>-</span>{page}<span onClick={() => setPage(page + 1)}>+</span></h1>
        <label for="limit">Limit: </label>
        <select name="limit" id="limit" value={10} onChange={(e) => handleChange(e, 'limit')}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  )
}