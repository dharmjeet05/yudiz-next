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

  const { data, isLoading } = useProducts(page, limit)

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page)
    }
    if (router.query.limit) {
      setLimit(router.query.limit)
    }
  }, [])

  async function handleChange(e, type) {
    switch (type) {
      case "limit":
        console.log('e.target.value', e.target.value)
        await setLimit(e.target.value)
        await setPage(1)
        break
      default:
        break
    }
  }

  if (isLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.container}>
        <h1><span onClick={() => setPage(page - 1)}>-</span>{page}<span onClick={() => setPage(page + 1)}>+</span></h1>
        <label htmlFor="limit">Limit: </label>
        <select name="limit" id="limit" defaultValue={10} onChange={(e) => handleChange(e, 'limit')}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
        {data?.products?.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}