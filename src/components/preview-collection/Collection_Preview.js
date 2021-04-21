import React from 'react'
import Collection_Item from '../collection-item/Collection_Item';
import "./Collection_Preview.styles.scss";

export default function Collection_Preview({title,items}) {
  return (
  <div className="collection_preview" >
   <h1> {title.toUpperCase()} </h1>
   <div  className="preview" >
     {items.filter((item,index)=>index<4).map(({id,name,imageUrl,price})=>(
       <Collection_Item id={id} name={name} imageUrl={imageUrl} price={price} />
     ))}
   </div>    
  </div>);
}
