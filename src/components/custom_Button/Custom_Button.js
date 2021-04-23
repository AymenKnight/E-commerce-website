import React from 'react'
import "./Custom_Button.styles.scss"

export default function Custom_Button({children,isGoogleSignIn,...otherprops}) {
    return (
       <button  className={`button ${isGoogleSignIn ? "googleSignIn" : ""}`} {...otherprops} >
           {children}
       </button>
    )
}
