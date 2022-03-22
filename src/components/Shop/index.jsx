import React, { useEffect, useState } from 'react'
import Cart from '../Cart'
import Product from '../Product'
import './shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('products.json')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  useEffect(() => {
    console.log(cart)
  }, [cart])
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products?.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleClick={handleAddToCart}
            />
          )
        })}
      </div>

      <Cart cart={cart} />
    </div>
  )
}

export default Shop
