import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import './login.css'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Login = () => {
  const passwordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth)

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  useEffect(() => {
    if (user || googleUser) {
      setEmail('')
      setPassword('')
      navigate('/shop')
    }

    if (loading || googleLoading) {
      setError('Signing in User...')
    }

    if (hookError) {
      setError(hookError.message)
    }
    if (googleError) {
      setError(googleError.message)
    }
  }, [
    user,
    loading,
    hookError,
    navigate,
    googleUser,
    googleLoading,
    googleError,
  ])

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please! Fill out Every Fields')
      return
    }
    if (password?.length < 6) {
      passwordRef.current?.focus()
      passwordRef.current?.classList.add('error')
      setError('Password must be atleast 6 characters long')
      return
    }
    if (passwordRef.current?.classList.contains('error')) {
      passwordRef.current?.classList.remove('error')
    }
    setError('')
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='form-container container'>
      <div className='form-shadow'>
        <form className='form' onSubmit={handleLogin}>
          <h2 className='form-title'>Login</h2>
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
              ref={passwordRef}
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
            />
          </div>
          <p className='error-message'>{error}</p>
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

          <button
            onClick={() => signInWithGoogle()}
            type='button'
            className='btn google-btn'
          >
            <FcGoogle className='google-icon' />
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
