import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleClick }) => {
  const { name, seller, img, price, ratings } = product
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
      <button className='cart-btn' onClick={() => handleClick(product)}>
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  )
}

export default Product
