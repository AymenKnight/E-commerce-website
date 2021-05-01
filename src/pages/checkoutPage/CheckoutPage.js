/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Checkout_Item from '../../components/checkout_item/Checkout_Item';
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
            {cartItems.map(cartItem=><Checkout_Item  key={cartItem.id}  cartItem={cartItem} />)}
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