import { call ,all,put , takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, GoogleProvider } from "../../firebase/firebase.utils";
import {  signInSuccess,signInFailed } from "./user.actions";
import  user_actions  from "./user.actions.Constants";



export function* getSnapshotFromUserAuth(userAuth){
   try {
    const userRef = yield call(createUserProfileDocument,userAuth)
    const userSnapshot =yield userRef.get()
     yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );

  } catch (error) {
      yield put(signInFailed(error))
       
  }
}

export function* googleSignInStart() {
  
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user)

  } catch (error) {
      yield put(signInFailed(error))  
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(user_actions.GOOGLE_SIGN_IN_START, googleSignInStart);
}

// Email Sign In sagas

export function* emailsigninstart ({payload : {email,password}}){
    try {
      console.log(password)
    const { user } = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromUserAuth(user)
     
  } catch (error) {
      yield put(signInFailed(error))
       
  }
}

export function* onEmailSignInStart (){
    yield takeLatest(user_actions.EMAIL_SIGN_IN_START,emailsigninstart)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)])
}

