import React, { Component } from 'react'

import SingleCategory from './SingleCategory'

export default class HomePage extends Component {
  render () {
    return (
      <div className='products-catagories-area clearfix'>
        <SingleCategory />
      </div>
    )
  }
}
