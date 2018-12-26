import React, { Component } from 'react'
export const CartContext = React.createContext();

export default class CartProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cartItems: [],
     
    }

    this.addtoCart = this.addtoCart.bind(this);
    this.udateCart = this.udateCart.bind(this)
  }

  addtoCart (product,key) {
    this.setState({
      cartItems: this.state.cartItems.concat(product),
      
    })
  }

  udateCart(key) {
    const items = {...this.state.cartItems};
    items[key] = items[key]+1 ||1;
    this.setState({items} );
  }

  render () {
    return (
      <CartContext.Provider
        value={{ cartItems: this.state.cartItems, addtoCart: this.addtoCart ,udateCart: this.udateCart   }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}
