import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selecteCartItems, selecteTotalPrice } from '../../redux/cart/cart.selectors';
import "./Checkout.styles.scss"

 function CheckoutPage({cartItems,total}) {
    return (
      <div className="checkout_page">
        <div className="header_container">
          <div className="header_block">
            <span> Product </span>
          </div>
          <div className="header_block">
            <span> Description</span>
          </div>
          <div className="header_block">
            <span>Quantity</span>
          </div>
          <div className="header_block">
            <span>Price</span>
          </div>
          <div className="header_block">
            <span>Remove</span>
          </div>
        </div>
        <div className="items_container" >
            {cartItems.map(cartItem=>cartItem.name)}
        </div>
        <div className="total" >
            <span>Total :  {total}$ </span>
        </div>
      </div>
    );
}

const mapStateToProps =createStructuredSelector({
    cartItems :selecteCartItems,
    total :selecteTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)