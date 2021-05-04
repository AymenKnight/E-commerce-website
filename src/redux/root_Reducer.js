import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist:["cart"]
};

const root_Reducer=combineReducers({
    user:userReducer,
    cart:cartReducer
})

export default persistReducer(persistConfig,root_Reducer)