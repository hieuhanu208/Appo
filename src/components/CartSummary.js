import React, { Component } from 'react'

export default class CartSummary extends Component {
  render() {
    return (
      <div className="col-12 col-lg-4">
        <div className="cart-summary">
          <h5>Cart Total</h5>
          <ul className="summary-table">
            <li><span>subtotal:</span> <span>$140.00</span></li>
            <li><span>delivery:</span> <span>Free</span></li>
            <li><span>total:</span> <span>$140.00</span></li>
          </ul>
          <div className="cart-btn mt-100">
            <a href="checkout.html" className="btn amado-btn w-100">Checkout</a>
          </div>
        </div>
      </div>
    )
  }
}
