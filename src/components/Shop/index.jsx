import React, { useEffect, useState } from 'react'
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
      <div className='cart-container'>
        <h4>Order Summary</h4>
        <p>Selected Items: {cart.length}</p>
        <p>
          Total Price: $
          {cart?.reduce(
            (totalPrice, product) => (totalPrice += product.price),
            0
          )}
        </p>

        <p>
          Total Shipping Charge: $
          {cart?.reduce(
            (totalShipping, product) => (totalShipping += product.shipping),
            0
          )}
        </p>
        <p>
          Tax: $
          {Math.round(
            cart?.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            ) * 0.1
          )}
        </p>
      </div>
    </div>
  )
}

export default Shop
