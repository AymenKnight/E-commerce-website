import React from 'react'
import "./Form_input.styles.scss"

export default function Form_Input({hundleChange,label,...otherprops}) {
    return (
      <div className="group">
        <input
          className="form_input"
          onChange={hundleChange}
          {...otherprops}
        />
        {
            label ? (<label  className={`${otherprops.value.length ? "shrink" :""} form_input_label `}  >
               {label}
            </label>)  : null
        }
      </div>
    );
}
