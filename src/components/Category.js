import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Category extends Component {
  render () {
    return (
      <div className='amado_product_area section-padding-100'>
        <div className='container-fluid'>
          <div className='row'>
     {/* Truyền props từ cha sang con Category */}
            <ProductItem  category_id = {this.props.match.params.category_id}/>
            </div>
          
          <div className='row'>
            <div className='col-12'>
              {/* Pagination */}
              <nav aria-label='navigation'>
                <ul className='pagination justify-content-end mt-50'>
                  <li className='page-item active'>
                    <a className='page-link' href='#'>
                      01.
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      02.
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      03.
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      04.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
