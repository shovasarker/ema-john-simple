import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import './login.css'

const Login = () => {
  return (
    <div className='form-container container'>
      <div className='form-shadow'>
        <form className='form'>
          <h2 className='form-title'>Login</h2>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              required
              type='email'
              id='email'
              placeholder='Enter Your Email'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              required
              type='password'
              id='password'
              placeholder='Enter Your Password'
            />
          </div>
          <button type='submit' className='btn submit-btn'>
            Login
          </button>

          <p className='form-text'>
            New to Ema-John?{' '}
            <Link className='form-link' to={'/signup'}>
              Create a New Account
            </Link>
          </p>
          <div className='divider'>
            <div className='line'></div>
            <span>or</span>
            <div className='line'></div>
          </div>

          <button type='button' className='btn google-btn'>
            <FcGoogle className='google-icon' />
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
