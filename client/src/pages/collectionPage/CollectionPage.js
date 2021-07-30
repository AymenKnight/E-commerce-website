/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { connect } from 'react-redux'
import Collection_Item from '../../components/collection-item/Collection_Item';
import { selecteCollectionByID } from '../../redux/shop/shop.selectors'
import "./CollectionPage.styles.scss"


 function CollectionPage({match,collection}) {

     const {items,title}  =collection

    return (
      <div className="collectionPage">
      <h2  className="title" > {title}  </h2>
        <div  className="items" >
          {items.map((item) => (
            <Collection_Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
}

const mapsStateToProps = (state, props) => ({
  collection: selecteCollectionByID(props.match.params.collectionId)(state),
});

export default connect(mapsStateToProps)(CollectionPage)
