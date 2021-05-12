/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import { Route } from 'react-router';
import Collection_OverView from '../../components/collection-overView/Collection_OverView';
import { convertCollectiosSnapShotToMap, firestore } from '../../firebase/firebase.utils';
import CollectionPage from '../collectionPage/CollectionPage';


 function ShopPage({match}) {
    
  useEffect(() => {
     let unsubscribe;
     const collectionRef =firestore.collection("collections");

     collectionRef.onSnapshot(async snapshot =>{
      const collectionMap =   convertCollectiosSnapShotToMap(snapshot)
      console.log(collectionMap)
     })

    return () => {
      
    }
  }, [0])

  return (
    <div>
      <Route exact component={Collection_OverView} path={`${match.path}`} />
      <Route    component={CollectionPage} path={`${match.path}:collectionId`} />
    </div>
  );
}


export default ShopPage;
