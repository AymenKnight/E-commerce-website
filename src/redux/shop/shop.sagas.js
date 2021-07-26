import { takeEvery ,call ,put} from "@redux-saga/core/effects";
import { convertCollectiosSnapShotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionCompletedAction, fetchCollectionFailedAction } from "./shop.actions";
import { shop_actions } from "./shop.actions.Constants";


export function* fetchCollectionsAsync(){

    try {
      const collectionRef = firestore.collection("collections");
      const snapshot = yield collectionRef.get() ;
      const collectionMap = yield call(convertCollectiosSnapShotToMap,snapshot);
      
      yield put(fetchCollectionCompletedAction(collectionMap));
       }
      catch(error) {
       yield put(fetchCollectionFailedAction(error.message))
      }
         
}

export  function*  fetchCollectionsStart (){
    yield takeEvery(shop_actions.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}