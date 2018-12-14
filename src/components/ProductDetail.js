import React, { Component } from 'react'
import dl from './data'
import { Link } from 'react-router-dom'

export default class ProductDetail extends Component {
  render () {
    const { product_id } = this.props.match.params

    const filterProduct = dl.product.filter(items => items.id == product_id)
    
    const isEmpty = filterProduct.length == 0 

    if (isEmpty) {
      return "404 NOT FOUND"
    }


    const items = filterProduct[0]

    return (
      <div className='single-product-area section-padding-100 clearfix'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb mt-50'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href='#'>Chairs</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {items.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-7'>
              <div className='single_product_thumb'>
                <div
                  id='product_details_slider'
                  className='carousel slide'
                  data-ride='carousel'
                >
                  <ol className='carousel-indicators'>
                    <li
                      className='active'
                      data-target='#product_details_slider'
                      data-slide-to={0}
                      style={{
                        backgroundImage: `url(${items.image[0]})`
                      }}
                    />
                    <li
                      data-target='#product_details_slider'
                      data-slide-to={1}
                      style={{
                        backgroundImage: `url(${items.image[1]})`
                      }}
                    />
                    <li
                      data-target='#product_details_slider'
                      data-slide-to={2}
                      style={{
                        backgroundImage: `url(${items.image[2]})`
                      }}
                    />
                    <li
                      data-target='#product_details_slider'
                      data-slide-to={3}
                      style={{
                        backgroundImage: `url(${items.image[0]})`
                      }}
                    />
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <a
                        className='gallery_img'
                        href={items.image[0]}
                      >
                        <img
                          className='d-block w-100'
                          src={items.image[1]}
                          alt='First slide'
                        />
                      </a>
                    </div>
                    <div className='carousel-item'>
                      <a
                        className='gallery_img'
                        href='img/product-img/pro-big-2.jpg'
                      >
                        <img
                          className='d-block w-100'
                          src='img/product-img/pro-big-2.jpg'
                          alt='Second slide'
                        />
                      </a>
                    </div>
                    <div className='carousel-item'>
                      <a
                        className='gallery_img'
                        href='img/product-img/pro-big-3.jpg'
                      >
                        <img
                          className='d-block w-100'
                          src='img/product-img/pro-big-3.jpg'
                          alt='Third slide'
                        />
                      </a>
                    </div>
                    <div className='carousel-item'>
                      <a
                        className='gallery_img'
                        href='img/product-img/pro-big-4.jpg'
                      >
                        <img
                          className='d-block w-100'
                          src='img/product-img/pro-big-4.jpg'
                          alt='Fourth slide'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-5'>
              <div className='single_product_desc'>
                {/* Product Meta Data */}
                <div className='product-meta-data'>
                  <div className='line' />
                  <p className='product-price'>{items.price}</p>
                  <a href='product-details.html'>
                    <h6>{items.name}</h6>
                  </a>
                  {/* Ratings & Review */}
                  <div className='ratings-review mb-15 d-flex align-items-center justify-content-between'>
                    <div className='ratings'>
                      <i className='fa fa-star' aria-hidden='true' />
                      <i className='fa fa-star' aria-hidden='true' />
                      <i className='fa fa-star' aria-hidden='true' />
                      <i className='fa fa-star' aria-hidden='true' />
                      <i className='fa fa-star' aria-hidden='true' />
                    </div>
                    <div className='review'>
                      <a href='#'>Write A Review</a>
                    </div>
                  </div>
                  {/* Avaiable */}
                  <p className='avaibility'>
                    <i className='fa fa-circle' /> {items.status}
                  </p>
                </div>
                <div className='short_overview my-5'>
                  <p>{items.description}</p>
                </div>
                {/* Add to Cart Form */}
                <form className='cart clearfix' method='post'>
                  <div className='cart-btn d-flex mb-50'>
                    <p>Qty</p>
                    <div className='quantity'>
                      <span
                        className='qty-minus'
                        onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
                      >
                        <i className='fa fa-caret-down' aria-hidden='true' />
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
                        <i className='fa fa-caret-up' aria-hidden='true' />
                      </span>
                    </div>
                  </div>
                  <button
                    type='submit'
                    name='addtocart'
                    value={5}
                    className='btn amado-btn'
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
