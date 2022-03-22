import React from 'react'
import './cart.css'

const Cart = ({ cart }) => {
  const totalQuantity = cart?.reduce(
    (totalQuantity, product) => (totalQuantity += product.quantity),
    0
  )
  const totalPrice = cart?.reduce(
    (totalPrice, product) => (totalPrice += product.price * product.quantity),
    0
  )
  const totalShipping = cart?.reduce(
    (totalShipping, product) => (totalShipping += product.shipping),
    0
  )
  const tax = parseFloat((totalPrice * 0.1).toFixed(2))
  const grandTotal = totalPrice + totalShipping + tax
  return (
    <div className='cart-container'>
      <h4 className='cart-title'>Order Summary</h4>
      <p>Selected Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h4 className='cart-grand-total'>
        Grand Total: ${grandTotal.toFixed(2)}
      </h4>
    </div>
  )
}

export default Cart
