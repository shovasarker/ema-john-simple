import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import './signup.css'

const SignUp = () => {
  const confirmRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleCreateUser = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords didn't match")
      setConfirmPassword('')
      confirmRef.current.focus()
      confirmRef.current.classList.add('error')
      return
    }

    setError('')
    if (confirmRef.current.classList.contains('error')) {
      confirmRef.current.classList.remove('error')
    }
  }

  return (
    <div className='form-container container'>
      <div className='form-shadow'>
        <form className='form' onSubmit={handleCreateUser}>
          <h2 className='form-title'>Sign Up</h2>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              required
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              required
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              ref={confirmRef}
              required
              type='password'
              id='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Enter Password Again'
            />
          </div>

          <p className='error-message'>{error}</p>
          <button type='submit' className='btn submit-btn'>
            Sign Up
          </button>

          <p className='form-text'>
            Already have a acoount?{' '}
            <Link className='form-link' to={'/login'}>
              Login
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

export default SignUp
