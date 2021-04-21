import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import {ReactComponent as Logo} from "../assets/crown.svg"


export default function Header() {
    return (
      <div className="header">
        <Link to="/" className="logo_Container">
          <Logo className="logo" />
        </Link>
        <div className="options_Container">
          <Link to="/shop/" className="option">
            SHOP
          </Link>
          <Link to="/contact/" className="option">
            CONTACT
          </Link>
        </div>
      </div>
    );
}
