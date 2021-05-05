/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Route } from 'react-router';
import Collection_OverView from '../../components/collection-overView/Collection_OverView';
import CollectionPage from '../collectionPage/CollectionPage';


 function ShopPage({match}) {
    
  console.log(match)

  return (
    <div>
      <Route exact component={Collection_OverView} path={`${match.path}`} />
      <Route  component={CollectionPage} path={`${match.path}:collectionId`} />
    </div>
  );
}


export default ShopPage;
