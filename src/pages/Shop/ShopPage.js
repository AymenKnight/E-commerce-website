/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import Collection_OverView from '../../components/collection-overView/Collection_OverView';
import { With_Spinner } from '../../components/with_Spinner/With_Spinner';
import { convertCollectiosSnapShotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollectionAction } from '../../redux/shop/shop.actions';
import CollectionPage from '../collectionPage/CollectionPage';


const  Collection_OverViewWithSpinner= With_Spinner(Collection_OverView)
const CollectionPageWithSpinner = With_Spinner(CollectionPage);

 function ShopPage({ match, updateCollections }) {

   const [loading, setloading] = useState(true)

   useEffect(() => {
     let unsubscribe;
     const collectionRef = firestore.collection("collections");

     collectionRef.onSnapshot(async (snapshot) => {
       const collectionMap = convertCollectiosSnapShotToMap(snapshot);
       console.log(collectionMap);
       updateCollections(collectionMap)
       setloading(false)
     });

     return () => {};
   }, [0]);

   return (
     <div>
       <Route
         exact
         render={(props) => (
           <Collection_OverViewWithSpinner isLoading={loading} {...props} />
         )}
         path={`${match.path}`}
       />
       <Route
         render={(props) => (
           <CollectionPageWithSpinner isLoading={loading} {...props} />
         )}
         path={`${match.path}:collectionId`}
       />
     </div>
   );
 }

const mapDispatchToProps =dispatch=>({
  updateCollections :collectionMap=>  dispatch(updateCollectionAction(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
