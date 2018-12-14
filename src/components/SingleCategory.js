import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dl from './data'

export default class SingleCategory extends Component {
  render () {
    //    to ='/shop/' +id ;
    return (
      <div className ="amado-pro-catagory clearfix">
        {dl.category.map((value, key) => {
          return (
            <div className='single-products-catagory clearfix' key= {key}>
              <Link to={'/shop/' + value.id}>
                <img src={value.image} alt='' />
                {/* Hover Content */}
                <div className='hover-content'>
                  <div className='line' />
                  <p>From $ {value.price}</p>
                  <h4>{value.name}</h4>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}
