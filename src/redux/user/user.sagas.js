import { call ,all,put , takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, GoogleProvider } from "../../firebase/firebase.utils";
import { emailSignInFailed, emailSignInSuccess, googleSignInFailed, googleSignInSuccess } from "./user.actions";
import  user_actions  from "./user.actions.Constants";


export function* googleSignInStart() {
  
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    const userRef = yield call(createUserProfileDocument,user)
    const userSnapshot =yield userRef.get()
     yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );

  } catch (error) {
      yield put(googleSignInFailed(error))
       
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(user_actions.GOOGLE_SIGN_IN_START, googleSignInStart);
}

// Email Sign In sagas

export function* emailsigninstart ({payload : {email,password}}){
    try {
    const { user } = yield auth.signInWithEmailAndPassword(email,password);
    const userRef = yield call(createUserProfileDocument,user)
    const userSnapshot =yield userRef.get()
     yield put(
      emailSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );

  } catch (error) {
      yield put(emailSignInFailed(error))
       
  }
}

export function* onEmailSignInStart (){
    yield takeLatest(user_actions.EMAIL_SIGN_IN_START,emailsigninstart)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)])
}

