import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dl from './data';
import { Button } from 'reactstrap';
import {CartContext} from '../context/CartProvider';

export default class ProductItem extends Component {
  render () {
   
    
    
    return (
      

       dl.product.filter((value,key) => value.cate_id === this.props.category_id).map((value ,key)=> {
         
        return (
          <div className='col-12 col-sm-4 col-md-12 col-xl-4'  key= {key}>
          <div className='single-product-wrapper' >
          {/* Product Image */}
          <div className='product-img'>
            <img src={value.image[0]} alt='' />
            {/* Hover Thumb */}
            <img className='hover-img' src={value.image_sub} alt='' />
          </div>
          {/* Product Description */}
          <div className='product-description d-flex align-items-center justify-content-between'>
            {/* Product Meta Data */}
            <div className='product-meta-data'>
              <div className='line' />
              <p className='product-price'>{value.price}</p>
              <Link to={'/product/' +value.id}>
                {' '}
                <h6>{value.name}</h6>{' '}
              </Link>
            </div>
            {/* Ratings & Cart */}
            <div className='ratings-cart text-right'>
              <div className='ratings'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
              </div>
              <div className='cart'>
              <CartContext.Consumer>
              {({addtoCart}) => 
                  
                     <Button color="danger"  onClick={()=> addtoCart(value)}>Add to cart!</Button>
                   }

                
              </CartContext.Consumer>
              
              </div>
            </div>
          </div>
        </div>
        </div>
         )
       })
       )
        
     
    
  }
}
