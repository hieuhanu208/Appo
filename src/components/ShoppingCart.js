import React, { Component } from 'react'
import CartDetail from './CartDetail'
import CartSummary from './CartSummary'
import { CartContext } from '../context/CartProvider'

export default class ShoppingCart extends Component {
  render () {
    return (
      <CartContext.Consumer>
        {({ cartItems , count }) => (
          <div className='cart-table-area section-padding-100'>
            <div className='container-fluid'>
              <div className='row'>
                <CartSummary />
                <CartDetail cartItems={cartItems} count={count} />
              </div>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}
