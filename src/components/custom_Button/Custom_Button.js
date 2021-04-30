import React from 'react'
import "./Custom_Button.styles.scss"

export default function Custom_Button({children,inverted,isGoogleSignIn,...otherprops}) {
    return (
       <button  className={` button ${inverted ? "inverted" : ""}  ${isGoogleSignIn ? "googleSignIn" : ""}`} {...otherprops} >
           {children}
       </button>
    )
}
