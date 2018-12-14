import React, { Component } from 'react'

export default class CheckoutDetail extends Component {
  render() {
    return (
      <div className="col-12 col-lg-8">
        <div className="checkout_details_area mt-50 clearfix">
          <div className="cart-title"><h2>Checkout</h2></div>
          <form action="#" method="post">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="first_name"  placeholder="First Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="last_name"  placeholder="Last Name" required />
              </div>
              <div className="col-12 mb-3">
                <input type="text" className="form-control" id="company" placeholder="Company Name"  />
              </div>
              <div className="col-12 mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email"  />
              </div>
              <div className="col-12 mb-3">
                <input type="text" className="form-control mb-3" id="street_address" placeholder="Address"  />
              </div>
              <div className="col-12 mb-3">
                <input type="text" className="form-control" id="phone_number" placeholder="Phone No"  />
              </div>
              <div className="col-12 mb-3">
                <textarea name="comment" className="form-control w-100" id="comment" cols={30} rows={10} placeholder="Leave a comment about your order" />
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
