import React from 'react'
import "./Cart_Icon.styles.scss"
import  {ReactComponent as ShoppingIcon} from  "../assets/shopping-bag.svg"
import { connect } from 'react-redux'
import { toggleCartHiddenAction } from "../../redux/cart/cart.actions";
import { selecteCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


 function Cart_Icon({ toggleCartHidden, itemsCount }) {
   return (
     <div className="cart_icon" onClick={toggleCartHidden}>
       <ShoppingIcon className="shoppingIcon" />
       <span className={`item_count  ${itemsCount <10 ? "less_then_10" : "more_then_10"}`}> {itemsCount} </span>
     </div>
   );
 }

 const mapStateToProps = createStructuredSelector ({
   itemsCount : selecteCartItemsCount
 });

const mapDispatchToProps =(dispatch)=>({
  toggleCartHidden : () => dispatch(toggleCartHiddenAction())
}) 
export default connect(mapStateToProps,mapDispatchToProps)(Cart_Icon);