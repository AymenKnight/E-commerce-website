import React from 'react'
import "./Custom_Button.styles.scss"

export default function Custom_Button({children,...otherprops}) {
    return (
       <button  className="button" {...otherprops} >
           {children}
       </button>
    )
}
