import React, { Component } from 'react'

export default class CheckoutDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      company: '',
      email: '',
      street_address: '',
      phone_number: '',
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.submitChange = this.submitChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: [event.target.value]
    })

    // console.log(event.target.value);
  }

  // submitChange(event){
  //   alert(this.state.value);
  //   event.preventDefault();
  // }

  render () {
    return (
      <div className='col-12 col-lg-8'>
        <div className='checkout_details_area mt-50 clearfix'>
          <div className='cart-title'>
            <h2>Checkout</h2>
          </div>
          <form action='#' method='post'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='first_name'
                  placeholder='First Name'
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='last_name'
                  placeholder='Last Name'
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-12 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='company'
                  placeholder='Company Name'
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-12 mb-3'>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-12 mb-3'>
                <input
                  type='text'
                  className='form-control mb-3'
                  name='street_address'
                  placeholder='Address'
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-12 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='phone_number'
                  placeholder='Phone No'
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-12 mb-3'>
                <textarea
                  name='comment'
                  className='form-control w-100'
                  name='comment'
                  cols={30}
                  rows={10}
                  placeholder='Leave a comment about your order'
                  onChange={this.handleChange}
                />
              </div>

              {/* <button type="submit"  onSubmit={this.submitChange}>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
}
