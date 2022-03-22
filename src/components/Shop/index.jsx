import React, { useEffect, useState } from 'react'
import Product from '../Product'
import './shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('products.json')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products?.map(({ id, ...otherProps }) => {
          return <Product key={id} {...otherProps} />
        })}
      </div>
      <div className='cart-container'>
        <h4>Order Summary</h4>
      </div>
    </div>
  )
}

export default Shop
