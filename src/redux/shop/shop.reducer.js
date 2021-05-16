import shopData from "../../pages/Shop/ShopData";
import { shop_actions } from "./shop.actions.Constants";

const initialState = {
  collections :null
};

export const shopReducer = (state=initialState, action) => {
  switch (action.type) {

    case shop_actions.UPDATE_COLLECTIONS :
     return  {
       ...state ,
       collections :action.payload
     }


    default:
      return state;
  }
};
