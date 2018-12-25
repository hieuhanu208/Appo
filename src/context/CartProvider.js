import React, { Component } from 'react'
export const CartContext = React.createContext();

export default class CartProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cartItems: [],
      count:0
    }

    this.addtoCart = this.addtoCart.bind(this)
  }

  addtoCart (product) {
    console.log(product);
    this.setState({
      cartItems: this.state.cartItems.concat(product),
      count: this.state.count +1 
    })
  }

  render () {
    return (
      <CartContext.Provider
        value={{ cartItems: this.state.cartItems, addtoCart: this.addtoCart , count:this.state.count }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}
