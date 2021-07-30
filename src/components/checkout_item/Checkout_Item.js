import React from 'react'
import { connect } from 'react-redux';
import { decreaseItemQuantityAction, deleteItemAction,addItemAction } from '../../redux/cart/cart.actions';
import "./Checkout_Item.styles.scss"

 function Checkout_Item({
   cartItem,
   deleteItemFromCart,
   decreaseItemQuantity,
   increaseItemQuantity
 }) {
   const { name, imageUrl, quantity, price } = cartItem;

   return (
     <div className="checkout_item">
       <div className="image_Container">
         <img alt="Product_image" src={imageUrl} />
       </div>
       <span className="name">{name} </span>
       <div className="quantity">
         <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
           &#10094;
         </div>
         <span className="quantity_value">{quantity}</span>
         <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
           &#10095;
         </div>
       </div>
       <span className="price">{price} </span>
       <div className="remove_btn" onClick={() => deleteItemFromCart(cartItem)}>
         {" "}
         &#10005;{" "}
       </div>
     </div>
   );
 }

const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCart: (cartItem) => dispatch(deleteItemAction(cartItem)),
  decreaseItemQuantity :(cartItem)=>dispatch(decreaseItemQuantityAction(cartItem)),
  increaseItemQuantity :(cartItem)=>dispatch(addItemAction(cartItem))
});

export default connect(null,mapDispatchToProps)(Checkout_Item)