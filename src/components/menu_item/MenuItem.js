import React from 'react';
import { withRouter } from 'react-router';
import "./menu_item.styles.scss"

function MenuItem({ title, imageUrl, size, history, linkUrl,match }) {
  return (
    <div onClick={() =>{
       console.log(match)
       history.push(`${match.url}${linkUrl}`)}}
       
        className={`${size}  menu_item`}>
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

export default withRouter(MenuItem);