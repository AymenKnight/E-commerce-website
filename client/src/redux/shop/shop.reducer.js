import { shop_actions } from "./shop.actions.Constants";

const initialState = {
  collections :null,
  isFetching: true ,
  errorMessage :undefined,
};

export const shopReducer = (state=initialState, action) => {
  switch (action.type) {

    case shop_actions.FETCH_COLLECTIONS_START :
      return {
        ...state ,
        isFetching : true
      }

    case shop_actions.FETCH_COLLECTIONS_COMPLETED :
     return  {
       ...state ,
       collections :action.payload ,
       isFetching :false 
     }

     case shop_actions.FETCH_COLLECTIONS_FAILED :
       return {
         ...state ,
         isFetching :false ,
         errorMessage :action.payload,
       }


    default:
      return state;
  }
};
