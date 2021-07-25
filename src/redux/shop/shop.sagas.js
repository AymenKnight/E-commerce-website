import { takeEvery } from "@redux-saga/core/effects";
import { shop_actions } from "./shop.actions.Constants";


export function* fetchCollectionsAsync(){
    yield console.log("Saga Fired !!")
}

export  function*  fetchCollectionsStart (){
    yield takeEvery(shop_actions.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}