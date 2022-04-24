import { useEffect, useState } from 'react'

const useProducts = (page, perPage) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = `http://localhost:5000/products?${
      page ? `page=${page}&perPage=${perPage}` : ''
    }`
    const getProducts = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data?.products)
    }
    getProducts()
  }, [perPage, page])

  return { products, setProducts }
}

export default useProducts
