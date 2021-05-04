import React, { useState } from 'react'
import MenuItem from "../menu_item/MenuItem";
import "./directory.styles.scss"


export const Directory = ({}) => {
    const [sections, setsections] = useState(Initail_sections)
    return (
      <div className="directory_menu">
        {sections.map(({ id, imageUrl, linkUrl, title, size }) => (
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
}


