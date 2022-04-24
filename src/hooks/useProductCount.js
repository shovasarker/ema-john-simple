import { useEffect, useState } from 'react'

const useProductCount = (perPage) => {
  const [pageCount, setPageCount] = useState(0)
  useEffect(() => {
    const url = `http://localhost:5000/productsCount`
    const getProducts = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setPageCount(Math.ceil(data?.length / perPage))
    }
    getProducts()
  }, [perPage])

  return { pageCount, setPageCount }
}

export default useProductCount
