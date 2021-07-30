/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { connect } from 'react-redux';
import { addItemAction } from '../../redux/cart/cart.actions';
import Custom_Button from '../custom_Button/Custom_Button'
import "./Collection_item.styles.scss"


 function Collection_Item({item,addItem}) {
   const {name,imageUrl,price}=item;
    return (
      <div className="collection_item">
        <div className="image"  style={{
            backgroundImage:`url(${imageUrl})`,
        }} />
        <div className="collection_footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
        </div>
        <Custom_Button  onClick={()=>addItem(item)}  inverted > Add to Cart </Custom_Button>
      </div>
    );
}

const mapDispatchToProps =(dispatch)=>({
  addItem:(item)=>dispatch(addItemAction(item))
}) ;

export default connect(null, mapDispatchToProps)(Collection_Item);
