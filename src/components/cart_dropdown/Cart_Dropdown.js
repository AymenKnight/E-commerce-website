import React from 'react'
import "./Cart_Dropdown.styles.scss"
import Custom_Button from "../custom_Button/Custom_Button";

export default function Cart_Dropdown() {
    return (
        <div  className="cart_dropdown" >
            <div className="cart_item_container" />
            <Custom_Button> GO TO CHECKOUT </Custom_Button>
        </div>
    )
}
