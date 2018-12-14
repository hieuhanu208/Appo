import React, { Component } from 'react'
import CheckoutDetail from './CheckoutDetail';
import Payment from './Payment';

export default class Checkout extends Component {
  render() {
    return (
      <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            <CheckoutDetail/>
            <Payment/>
          </div>
        </div>
      </div>

    )
  }
}
