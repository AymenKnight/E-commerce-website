import  {shop_actions} from  "./shop.actions.Constants"

export const fetchCollectionStartAction=()=>({
    type : shop_actions.FETCH_COLLECTIONS_START ,
})

export const fetchCollectionCompletedAction = (collectionMap) => ({
  type: shop_actions.FETCH_COLLECTIONS_COMPLETED,
  payload:collectionMap
});

export const fetchCollectionFailedAction = (errorMessage) => ({
  type: shop_actions.FETCH_COLLECTIONS_FAILED,
  payload :errorMessage
});

export const fetchCollectionStartAsyncAction = () => {
    return dispatch=> {
        
    }
};