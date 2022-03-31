import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('products.json')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  return [products, setProducts]
}

export default useProducts
