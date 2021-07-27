import { call ,all,put , takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, getCurrentUser, GoogleProvider } from "../../firebase/firebase.utils";
import {  signInSuccess,signInFailed, signOutSuccess, signOutFailed } from "./user.actions";
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


export function* isUserAuthentiacted(){
  try {
      const userAuth  = yield getCurrentUser()
      if(!userAuth)  return
       yield getSnapshotFromUserAuth(userAuth)


  } catch (error) {
     yield put(signInFailed(error))
  }  
}

export function* onCheckUserSession(){
  yield takeLatest(user_actions.CHECK_USER_SESSION,isUserAuthentiacted)
}

export function* signOut(){
  try {
    auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
     yield put(signOutFailed(error))
  }
}

export function* onSignOutStart(){
  yield takeLatest(user_actions.SIGN_OUT_START,signOut)
}


//User Root Saga 

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart)])
}


