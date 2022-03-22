import React from 'react'
import './cart.css'

const Cart = ({ cart }) => {
  const totalPrice = cart?.reduce(
    (totalPrice, product) => (totalPrice += product.price),
    0
  )
  const totalShipping = cart?.reduce(
    (totalShipping, product) => (totalShipping += product.shipping),
    0
  )
  const tax = parseFloat((totalPrice * 0.1).toFixed(2))
  return (
    <div className='cart-container'>
      <h4 className='cart-title'>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>

      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
    </div>
  )
}

export default Cart
