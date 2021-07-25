import {createStore,applyMiddleware} from "redux"
import logger  from "redux-logger"
import root_Reducer from "./root_Reducer"
import  {persistStore} from "redux-persist"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./shop/shop.sagas"

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
export const store =createStore(root_Reducer,applyMiddleware(...middleware));
sagaMiddleware.run(fetchCollectionsStart);
export const persiStore =persistStore(store)


