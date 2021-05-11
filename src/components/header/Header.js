/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import "./Header.scss"
import {ReactComponent as Logo} from "../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Cart_Icon from '../cart_icon/Cart_Icon';
import Cart_Dropdown from '../cart_dropdown/Cart_Dropdown';
import { createStructuredSelector } from 'reselect';
import { selecteCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink}  from "./header.styles"



 function Header({ currentUser ,hidden}) {
  
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop/">SHOP</OptionLink>
        <OptionLink to="/contact/">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink  as="div"  onClick={() => auth.signOut()}> Sign Out </OptionLink>
        ) : (
          <OptionLink to="/signin/">Sign In</OptionLink>
        )}
        <Cart_Icon />
      </OptionsContainer>
      {hidden ? null : <Cart_Dropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selecteCartHidden,
});

export default connect(mapStateToProps)(Header);