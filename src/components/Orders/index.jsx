import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { removeFromDb } from '../../utilities/fakedb'
import Cart from '../Cart'
import ReviewItem from '../ReviewItem'
import './orders.css'

const Orders = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)
  const removeItem = (id) => {
    setCart(cart?.filter((item) => item.id !== id))
    removeFromDb(id)
  }
  return (
    <div className='orders-container container'>
      <div className='orders-list'>
        {cart.length > 0 &&
          cart?.map((product, i) => {
            return (
              <ReviewItem key={i} product={product} handleClick={removeItem} />
            )
          })}
      </div>
      <div className='orders-summary'>
        <Cart cart={cart} inOrders>
          <Link to={'/inventory'} className='custom-btn'>
            Proceed to Checkout
          </Link>
        </Cart>
      </div>
    </div>
  )
}

export default Orders