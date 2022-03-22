import React from 'react'
import './product.css'

const Product = ({ name, seller, img, price, ratings }) => {
  return (
    <div className='product'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p className='product-price'>Price: ${price}</p>
      </div>
      <div className='product-info mt-auto'>
        <small className='product-seller'>Manufacturer: {seller}</small>
        <small className='product-rating'>Rating: {ratings}star</small>
      </div>
      <button className='cart-btn'>
        <p>Add to Cart</p>
      </button>
    </div>
  )
}

export default Product
