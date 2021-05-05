import React from 'react'
import { connect } from 'react-redux'
import { selecteCollectionByID } from '../../redux/shop/shop.selectors'
import "./Collection.styles.scss"


 function CollectionPage({match,collection}) {
       console.log("collection page :", match);
    console.log("collection page :", match.params.collectionId);
    console.log("collection : " ,collection)
    return (
        <div  className="collectionPage" >
            collection Page
        </div>
    )
}

const mapsStateToProps = (state, props) => ({
  collection: selecteCollectionByID(props.match.params.collectionId)(state),
});

export default connect(mapsStateToProps)(CollectionPage)
