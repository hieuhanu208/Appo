import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'

export default class Header extends Component {
  render() {
    return (

      <header className='header-area clearfix'>
        {/* Close Icon */}
        <div className='nav-close'>
          <i className='fa fa-close' aria-hidden='true' />
        </div>
        {/* Logo */}
        <div className='logo'>
          <Link to='/'> <img src='/img/core-img/logo.png' alt="true" /></Link>
        </div>
        {/* Amado Nav */}
        <nav className='amado-nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop/556ba8ad-660b-434e-b1b3-a25e1d399fae'>Shop</Link>
            </li>
            <li>
              <Link to='checkout'>Checkout</Link>
            </li>
          </ul>
        </nav>
        {/* Cart Menu */}
        <div className='cart-fav-search mb-100'>
          <CartContext.Consumer>
            {({ cartItems }) => (<Link to='/cart' className='cart-nav'>
              <img src='/img/core-img/cart.png' alt="true" /> Cart <span>({cartItems.length})</span>
            </Link>)}
          </CartContext.Consumer>

          <Link to='/search' className='search-nav'>
            <img src='/img/core-img/search.png' alt="true" /> Search
            </Link>
        </div>
        {/* Social Button */}
        <div className='social-info d-flex justify-content-between'>
          <a href='https://www.pinterest.com/'>
            <i className='fa fa-pinterest' aria-hidden='true' />
          </a>
          <a href='https://www.instagram.com/?hl=vi'>
            <i className='fa fa-instagram' aria-hidden='true' />
          </a>
          <a href='https://www.facebook.com/hieuhanufit'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </a>
          <a href='https://twitter.com/?lang=vi'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </a>
        </div>
      </header>
    )
  }
}
