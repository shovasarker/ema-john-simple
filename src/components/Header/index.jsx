import React from 'react'
import './header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'

const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <header className='header'>
      <nav className='navbar container'>
        <img src={logo} alt='logo' className='logo' />
        <div className='link-container'>
          <Link to='/shop' className='link'>
            Shop
          </Link>
          <Link to='/orders' className='link'>
            Orders
          </Link>
          <Link to='/inventory' className='link'>
            Inventory
          </Link>
          <Link to='/about' className='link'>
            About
          </Link>
          {user ? (
            <button onClick={() => signOut(auth)} className='signout-btn link'>
              Sign Out
            </button>
          ) : (
            <Link to='/login' className='link'>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
