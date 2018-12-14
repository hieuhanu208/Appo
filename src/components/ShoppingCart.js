import React, { Component } from 'react'
import CartDetail from './CartDetail';
import CartSummary from './CartSummary';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
          <div className="row">
          <CartDetail/>
          <CartSummary/>
          </div>
        </div>
      </div>

    )
  }
}
