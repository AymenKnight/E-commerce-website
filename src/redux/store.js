import {createStore,applyMiddleware} from "redux"
import logger  from "redux-logger"
import root_Reducer from "./root_Reducer"
import  {persistStore} from "redux-persist"
import thunk from "redux-thunk"


const middleware =[logger,thunk];
export const store =createStore(root_Reducer,applyMiddleware(...middleware));
export const persiStore =persistStore(store)


