import { all, call, put, takeLatest } from "redux-saga/effects";
import user_actions from "../user/user.actions.Constants";
import { clearCart } from "./cart.actions";





export function* ClearCartOnSignOut (){
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(user_actions.SIGN_OUT_SUCCESS,ClearCartOnSignOut)
}

export function*  cartSagas(){
    yield all([call(onSignOutSuccess)])
}