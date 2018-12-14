import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_area clearfix">
  <div className="container">
    <div className="row align-items-center">
      {/* Single Widget Area */}
      <div className="col-12 col-lg-4">
        <div className="single_widget_area">
          {/* Logo */}
          <div className="footer-logo mr-50">
            <Link to='/home'><img src="/img/core-img/logo2.png" alt = "true"  /></Link>
          </div>
          {/* Copywrite Text */}
          <p className="copywrite">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" >Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
      {/* Single Widget Area */}
      <div className="col-12 col-lg-8">
        <div className="single_widget_area">
          {/* Footer Menu */}
          <div className="footer_menu">
            <nav className="navbar navbar-expand-lg justify-content-end">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
              <div className="collapse navbar-collapse" id="footerNavContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to='/home' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/shop' className="nav-link">Shop</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/product' className="nav-link">Product</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/cart' className="nav-link" >Cart</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/checkout' className="nav-link" >Checkout</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
  }
}
