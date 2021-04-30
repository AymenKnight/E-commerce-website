/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import "./Cart_Dropdown.styles.scss"
import Custom_Button from "../custom_Button/Custom_Button";
import { connect } from 'react-redux';
import Cart_Item from '../cart_item/Cart_Item';

 function Cart_Dropdown({cartItems}) {
    return (
        <div  className="cart_dropdown" >
            <div className="cart_item_container" >
                {
                    cartItems.map((cartItem)=><Cart_Item  key={cartItem.id} item={cartItem} />)
                    }
            </div>
            <Custom_Button  > GO TO CHECKOUT </Custom_Button>
        </div>
    )
}

const mapToStateToProps =({cart:{cartItems}})=>({
  cartItems
})
export default connect(mapToStateToProps)(Cart_Dropdown)