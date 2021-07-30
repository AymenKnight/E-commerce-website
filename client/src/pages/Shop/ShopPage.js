/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { createStructuredSelector } from 'reselect';
import Collection_OverView from '../../components/collection-overView/Collection_OverView';
import { With_Spinner } from '../../components/with_Spinner/With_Spinner';
import { fetchCollectionStartAction } from '../../redux/shop/shop.actions';
import { selecteCollectionIsFetching } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collectionPage/CollectionPage';


const  Collection_OverViewWithSpinner= With_Spinner(Collection_OverView)
const CollectionPageWithSpinner = With_Spinner(CollectionPage);

 function ShopPage({ match, fetchCollectionsStart, loading }) {
   useEffect(() => {
     fetchCollectionsStart();
     return () => {};
   }, [fetchCollectionsStart]);

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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionStartAction()),
});

const mapStateToProps =createStructuredSelector({
  loading :selecteCollectionIsFetching
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
