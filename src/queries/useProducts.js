import { useQuery } from "react-query"
import Axios from "../configs/Axios"

async function getProducts(page, limit) {
  const skipp = (page - 1) * limit
  const products = await Axios.get(`/products?skip=${skipp}&limit=${limit}`)
  console.log('products', products)
  return products?.data
}

export const useProducts = (page, limit) => {
  return useQuery({ 
    queryKey: ['products', page, limit],
    queryFn: ({ queryKey }) => getProducts(queryKey[1], queryKey[2])
  })
}