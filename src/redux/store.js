import {createStore,applyMiddleware} from "redux"
import logger  from "redux-logger"
import root_Reducer from "./root_Reducer"
import  {persistStore} from "redux-persist"

const middleware =[logger];
export const store =createStore(root_Reducer,applyMiddleware(...middleware));
export const persiStore =persistStore(store)


