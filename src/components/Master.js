import React, { Component } from 'react'
import Header from './Header'
import HomePage from './HomePage'
import { Switch, Route } from 'react-router-dom'
import Category from './Category'
import ProductDetail from './ProductDetail'
import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout'
import Search from './Search'
import Seach from './Search'

export default class Master extends Component {
  render () {
    return (
      <React.Fragment>
        <Seach />
        <div className='main-content-wrapper d-flex clearfix'>
          <div className='mobile-nav'>
            {/* Navbar Brand */}
            <div className='amado-navbar-brand'>
              <a href='index.html'>
                <img src='/img/core-img/logo.png' alt='true' />
              </a>
            </div>
            {/* Navbar Toggler */}
            <div className='amado-navbar-toggler'>
              <span />
              <span />
              <span />
            </div>
          </div>

          <Header />

          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shop/:category_id' component={Category} />
            <Route path='/product/:product_id' component={ProductDetail} />
            <Route path='/cart' component={ShoppingCart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/imsearch' component={Search} />
          </Switch>

          {/* Product Catagories Area End */}
        </div>
      </React.Fragment>
    )
  }
}
