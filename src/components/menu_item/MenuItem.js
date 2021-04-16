import React from 'react';
import "./menu_item.styles.scss"

function MenuItem({ title, imageUrl ,size}) {
  return (
    <div className={`${size}  menu_item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background_image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;