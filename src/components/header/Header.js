/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import {ReactComponent as Logo} from "../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Cart_Icon from '../cart_icon/Cart_Icon';
import Cart_Dropdown from '../cart_dropdown/Cart_Dropdown';
import { createStructuredSelector } from 'reselect';
import { selecteCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from "../../redux/user/user.selectors";



 function Header({ currentUser ,hidden}) {
  
  return (
    <div className="header">
      <Link to="/" class Name="logo_Container">
        <Logo className="logo" />
      </Link>
      <div className="options_Container">
        <Link to="/shop/" className="option">
          SHOP
        </Link>
        <Link to="/contact/" className="option">
          CONTACT
        </Link>
        {
          
          currentUser ? 
          <div className="option" onClick={()=>auth.signOut()} > Sign Out </div>
          : 
          <Link className="option" to="/signin/" >
            Sign In
          </Link>
        }
        <Cart_Icon />
      </div>
      { hidden ? null : <Cart_Dropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selecteCartHidden,
});

export default connect(mapStateToProps)(Header);