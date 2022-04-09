import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import './signup.css'
import auth from '../../firebase.init'

const SignUp = () => {
  const passwordRef = useRef(null)
  const confirmRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth)

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

  const handleCreateUser = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords didn't match")
      setConfirmPassword('')
      confirmRef.current?.focus()
      confirmRef.current?.classList.add('error')
      return
    }

    if (!email || !password) {
      setError('Please! Fill out Every Fields')
      return
    }
    if (password?.length < 6) {
      passwordRef.current?.focus()
      passwordRef.current?.classList.add('error')
      confirmRef.current?.classList.add('error')
      setError('Password must be atleast 6 characters long')
      return
    }
    if (passwordRef.current?.classList.contains('error')) {
      passwordRef.current?.classList.remove('error')
    }
    if (confirmRef.current?.classList.contains('error')) {
      confirmRef.current?.classList.remove('error')
    }
    setError('')
    createUserWithEmailAndPassword(email, password)
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
              ref={passwordRef}
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

export default SignUp
