import React from 'react'
import './cart.css'

const Cart = ({ cart }) => {
  return (
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
  )
}

export default Cart
