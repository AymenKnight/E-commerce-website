import React from 'react'
import Collection_Item from '../collection-item/Collection_Item';
import "./Collection_Preview.styles.scss";

export default function Collection_Preview({ title, items, routeName }) {
  return (
    <div className="collection_preview"  onClick={()=>{
    }} >
      <h1> {title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Collection_Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
