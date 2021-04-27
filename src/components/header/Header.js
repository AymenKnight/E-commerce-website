import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import {ReactComponent as Logo} from "../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';



 function Header({ currentUser }) {
  
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);