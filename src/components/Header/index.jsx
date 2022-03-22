import React from 'react'
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar container'>
        <img src={logo} alt='logo' className='logo' />
        <div className='link-container'>
          <a href='/shop' className='link'>
            Shop
          </a>
          <a href='/orders' className='link'>
            Orders
          </a>
          <a href='/inventory' className='link'>
            Inventory
          </a>
          <a href='/about' className='link'>
            About
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
