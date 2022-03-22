import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingdCart } from '../../utilities/fakedb'
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
    if (!products.length > 0) return
    const storedCart = getShoppingdCart()
    const cartProducts = Object.entries(storedCart)?.map(([id, quantity]) => {
      return {
        ...products.find((product) => product.id === id),
        quantity: quantity,
      }
    })
    setCart(cartProducts)
    console.log(cartProducts)
  }, [products])

  const handleAddToCart = (product) => {
    const findProduct = cart?.find(({ id }) => product.id === id)
    if (findProduct) {
      setCart(
        cart?.map((item) =>
          product.id === item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    addToDb(product.id)
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
