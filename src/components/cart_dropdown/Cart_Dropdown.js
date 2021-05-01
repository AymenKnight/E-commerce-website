/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import "./Cart_Dropdown.styles.scss"
import Custom_Button from "../custom_Button/Custom_Button";
import { connect } from 'react-redux';
import Cart_Item from '../cart_item/Cart_Item';
import { selecteCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

 function Cart_Dropdown({cartItems,history,nmatch}) {
    return (
        <div  className="cart_dropdown" >
            <div className="cart_item_container" >
                {    
                    cartItems.length > 0 ?
                    cartItems.map((cartItem)=><Cart_Item  key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty_list" > Your cart is empty ! </span>
                    }
            </div>
            <Custom_Button onClick={()=>history.push("/checkout")}  > GO TO CHECKOUT </Custom_Button>
        </div>
    )
}

const mapToStateToProps =createStructuredSelector({
  cartItems : selecteCartItems
})
export default  withRouter( connect(mapToStateToProps)(Cart_Dropdown) )