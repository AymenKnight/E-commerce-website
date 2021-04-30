import React from 'react'
import "./Cart_Item.styles.scss"

export default function Cart_Item({item :{imageUrl,price,name,quantity}}) {
    return (
      <div className="cart_item">
        <img src={imageUrl} alt="item" />
        <div className="item_details">
          <span className="name">{name} </span>
          <span className="price">{quantity} * {price}$</span>
        </div>
      </div>
    );
}
