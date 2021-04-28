import React from 'react'
import Custom_Button from '../custom_Button/Custom_Button'
import "./Collection_item.styles.scss"

export default function Collection_Item({id,name,imageUrl,price}) {
    return (
      <div className="collection_item">
        <div className="image"  style={{
            backgroundImage:`url(${imageUrl})`,
        }} />
        <div className="collection_footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
        </div>
        <Custom_Button  inverted > Add to Cart </Custom_Button>
      </div>
    );
}
