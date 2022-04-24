import { useEffect, useState } from 'react'

const useProducts = (perPage) => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('http://localhost:5000/products')
      const data = await res.json()
      setProducts(data?.result)
      setPageCount(Math.ceil(data?.totalProducts / perPage))
    }
    getProducts()
  }, [perPage])

  return { products, setProducts, pageCount, setPageCount }
}

export default useProducts
