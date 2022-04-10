import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Shipment = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [user] = useAuthState(auth)
  //   const [error, setError] = useState('')

  const handleShippingInfo = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form-container container'>
      <div className='form-shadow'>
        <form className='form' onSubmit={handleShippingInfo}>
          <h2 className='form-title'>Shipping Information</h2>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input readOnly type='email' id='email' value={user?.email} />
          </div>
          <div className='input-group'>
            <label htmlFor='address'>Address</label>
            <input
              required
              type='text'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Enter Your Address'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              required
              type='number'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
            />
          </div>

          {/* <p className='error-message'>{error}</p> */}
          <button type='submit' className='btn submit-btn'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Shipment
