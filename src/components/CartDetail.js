import React, { Component } from 'react'

export default class CartDetail extends Component {
  render () {
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
              <tr>
                <td className='cart_product_img'>
                  <a href='abc.com'>
                    <img src='img/bg-img/cart1.jpg' alt='Product' />
                  </a>
                </td>
                <td className='cart_product_desc'>
                  <h5>White Modern Chair</h5>
                </td>
                <td className='price'>
                  <span>$130</span>
                </td>
                <td className='qty'>
                  <div className='qty-btn d-flex'>
                    <p>Qty</p>
                    <div className='quantity'>
                      <span
                        className='qty-minus'
                        onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
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
                        defaultValue={1}
                      />
                      <span
                        className='qty-plus'
                        onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                      >
                        <i className='fa fa-plus' aria-hidden='true' />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='cart_product_img'>
                  <a href='abc.com'>
                    <img src='img/bg-img/cart2.jpg' alt='Product' />
                  </a>
                </td>
                <td className='cart_product_desc'>
                  <h5>Minimal Plant Pot</h5>
                </td>
                <td className='price'>
                  <span>$10</span>
                </td>
                <td className='qty'>
                  <div className='qty-btn d-flex'>
                    <p>Qty</p>
                    <div className='quantity'>
                      <span
                        className='qty-minus'
                        onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
                      >
                        <i className='fa fa-minus' aria-hidden='true' />
                      </span>
                      <input
                        type='number'
                        className='qty-text'
                        id='qty2'
                        step={1}
                        min={1}
                        max={300}
                        name='quantity'
                        defaultValue={1}
                      />
                      <span
                        className='qty-plus'
                        onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                      >
                        <i className='fa fa-plus' aria-hidden='true' />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='cart_product_img'>
                  <a href='abc.com'>
                    <img src='img/bg-img/cart3.jpg' alt='Product' />
                  </a>
                </td>
                <td className='cart_product_desc'>
                  <h5>Minimal Plant Pot</h5>
                </td>
                <td className='price'>
                  <span>$10</span>
                </td>
                <td className='qty'>
                  <div className='qty-btn d-flex'>
                    <p>Qty</p>
                    <div className='quantity'>
                      <span
                        className='qty-minus'
                        onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
                      >
                        <i className='fa fa-minus' aria-hidden='true' />
                      </span>
                      <input
                        type='number'
                        className='qty-text'
                        id='qty3'
                        step={1}
                        min={1}
                        max={300}
                        name='quantity'
                        defaultValue={1}
                      />
                      <span
                        className='qty-plus'
                        onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                      >
                        <i className='fa fa-plus' aria-hidden='true' />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
