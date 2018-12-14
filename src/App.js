import React, { Component } from 'react'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
import Master from './components/Master'

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
        {/* <Header /> */}
        <Master />
        <SubFooter />
        <Footer />
      </div>
    )
  }
}

export default App
