import {createStore,applyMiddleware} from "redux"
import logger  from "redux-logger"
import root_Reducer from "./root_Reducer"

const middleware =[logger];
const store =createStore(root_Reducer,applyMiddleware(...middleware));

export default store;