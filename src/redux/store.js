import {createStore,applyMiddleware} from "redux"
import logger  from "redux-logger"
import root_Reducer from "./root_Reducer"
import  {persistStore} from "redux-persist"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga"

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
export const store =createStore(root_Reducer,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export const persiStore =persistStore(store)


