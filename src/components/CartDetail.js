import React, { Component } from 'react'
import cartItems from '../components/ShoppingCart'
import ProductItem from './ProductItem'

export default class CartDetail extends Component {
  render () {
    const { cartItems } = this.props
    const {count}= this.props
   

    return (
      <div className='col-12 col-lg-8'>
        <div className='cart-title mt-50'>
          <h2>Shopping Cart</h2>
        </div>
        <div className='cart-table clearfix'>
          <table className='table table-responsive'>
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((cartItems, key) => {
                return (
                  <tr key={key}>
                    <td className='cart_product_img'>
                      <a href='abc.com'>
                        <img src={cartItems.image[0]} alt='Product' />
                      </a>
                    </td>
                    <td className='cart_product_desc'>
                      <h5>{cartItems.name}</h5>
                    </td>
                    <td className='price'>
                      <span>${cartItems.price}</span>
                    </td>
                    <td className='qty'>
                      <div className='qty-btn d-flex'>
                        <p>Qty</p>
                        <div className='quantity'>
                          <span
                            className='qty-minus'
                            // onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
                          >
                            <i className='fa fa-minus' aria-hidden='true' />
                          </span>
                          <input
                            type='number'
                            className='qty-text'
                            id='qty'
                            step={1}
                            min={1}
                            max={300}
                            name='quantity'
                            defaultValue={count}
                          />
                          <span
                            className='qty-plus'
                            // onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                          >
                            <i className='fa fa-plus' aria-hidden='true' />
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
