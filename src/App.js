import React, { Component } from 'react'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
import Master from './components/Master'
import CartProvider from './context/CartProvider'


class App extends Component {
  componentDidMount() {
    window.active(window.jQuery)
  }
  componentDidUpdate() {
    window.active(window.jQuery)
  }
  render() {
    return (
      <div>
        <CartProvider >
        <Master />
        <SubFooter />
        <Footer />
        </CartProvider>
        {/* <Header /> */}
        
      </div>
    )
  }
}

export default App
