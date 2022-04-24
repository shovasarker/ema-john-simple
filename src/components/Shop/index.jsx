import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { addToDb } from '../../utilities/fakedb'
import Cart from '../Cart'
import Product from '../Product'
import './shop.css'

const Shop = () => {
  const [perPage, setPerPage] = useState(10)
  const { products, pageCount } = useProducts(perPage)
  const [cart, setCart] = useCart(products)
  const [page, setPage] = useState(1)

  const handleAddToCart = (product) => {
    const findProduct = cart?.find(({ _id }) => product._id === _id)
    let newCart = []
    if (findProduct) {
      newCart = cart?.map((item) =>
        product._id === item._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      //Alternate Method
      // const restProducts = cart?.filter((item) => item.id !== product.id)
      // newCart = [
      //   ...restProducts,
      //   { ...findProduct, quantity: findProduct.quantity + 1 },
      // ]
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }
    setCart(newCart)
    addToDb(product._id)
  }

  return (
    <div className='shop-container'>
      <div>
        <div className='products-container'>
          {products?.map((product) => {
            return (
              <Product
                key={product?._id}
                product={product}
                handleClick={handleAddToCart}
              />
            )
          })}
        </div>
        <div className='pagination'>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={`${page === number + 1 ? 'selected' : ''}`}
              key={number}
              onClick={() => setPage(number + 1)}
            >
              {number + 1}
            </button>
          ))}
          <select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
        </div>
      </div>
      <div className='cart-summary-container'>
        <Cart cart={cart}>
          <Link to={'/orders'} className='custom-btn'>
            Review Order
          </Link>
        </Cart>
      </div>
    </div>
  )
}

export default Shop
