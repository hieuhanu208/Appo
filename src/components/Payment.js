import React, { Component } from 'react'

export default class Payment extends Component {
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
                <div className="payment-method">
                  {/* Cash on delivery */}
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="cod" defaultChecked />
                    <label className="custom-control-label" htmlFor="cod">Cash on Delivery</label>
                  </div>
                  {/* Paypal */}
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="paypal" />
                    <label className="custom-control-label" htmlFor="paypal">Paypal
                <img className="ml-15" src="img/core-img/paypal.png" alt="" /></label>
                  </div>
                </div>
                <div className="cart-btn mt-100">
                  <a href="checkout.html" className="btn amado-btn w-100">Checkout</a>
                </div>
              </div>
            </div>
    )
  }
}
