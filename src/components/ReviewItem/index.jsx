import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './review-item.css'

const ReviewItem = ({ product, handleClick }) => {
  const { id, name, price, shipping, img, quantity } = product
  return (
    <div className='review-item'>
      <div className='item-details'>
        <img src={img && img} alt={name} />
        <div>
          <h6 className='item-name' title={name}>
            {name?.length > 20 ? name.slice(0, 20) + ' . . .' : name}
          </h6>
          <p className='item-extra'>
            Price: <span>${price}</span>
          </p>
          <p className='item-extra'>
            Shipping Charge: <span>${shipping}</span>
          </p>
          <p className='item-extra'>
            Quantity: <span>{quantity}</span>
          </p>
        </div>
      </div>
      <button onClick={() => handleClick(id)} className='remove-btn'>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  )
}

export default ReviewItem
