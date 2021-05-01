import React from 'react'
import { connect } from 'react-redux';
import { deleteItemAction } from '../../redux/cart/cart.actions';
import "./Checkout_Item.styles.scss"


 function Checkout_Item({ cartItem, deleteItemFromCart}) {
   const {name,imageUrl,quantity,price}=cartItem
    
   return (
     <div className="checkout_item">
       <div className="image_Container">
         <img alt="Product_image" src={imageUrl} />
       </div>
       <span className="name">{name} </span>
       <span className="quantity">{quantity} </span>
       <span className="price">{price} </span>
       <div className="remove_btn" onClick={()=>deleteItemFromCart(cartItem)}>
         {" "}
         &#10005;{" "}
       </div>
     </div>
   );
 }

const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCart: (cartItem) => dispatch(deleteItemAction(cartItem))
});

export default connect(null,mapDispatchToProps)(Checkout_Item)