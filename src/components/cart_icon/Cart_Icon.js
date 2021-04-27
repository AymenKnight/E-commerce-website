import React from 'react'
import "./Cart_Icon.styles.scss"
import  {ReactComponent as ShoppingIcon} from  "../assets/shopping-bag.svg"
import { connect } from 'react-redux'
import { toggleCartHiddenAction } from "../../redux/cart/cart.actions";


 function Cart_Icon({ toggleCartHidden }) {
   return (
     <div className="cart_icon" onClick={toggleCartHidden}>
       <ShoppingIcon className="shoppingIcon" />
       <span className="item_count"> 0 </span>
     </div>
   );
 }
const mapDispatchToProps =(dispatch)=>({
  toggleCartHidden : () => dispatch(toggleCartHiddenAction())
}) 
export default connect(null,mapDispatchToProps)(Cart_Icon);