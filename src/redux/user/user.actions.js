import  user_actions  from "./user.actions.Constants";

export const setcurrentUserAction=user=>({
  type:user_actions.SET_CURRENT_USER,
  payload:user
})

export const googleSignInStart = ()=>({
 type:user_actions.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
  type: user_actions.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: user_actions.SIGN_IN_SUCCESS,
  payload : user,
});

export const signInFailed = (error) => ({
  type: user_actions.SIGN_IN_FAILED,
  payload :error,
});

export const checkUserSession= ()=>({
  type :user_actions.CHECK_USER_SESSION
})

export const signOutStart=()=>({
  type :user_actions.SIGN_OUT_START
})
export const signOutSuccess = () => ({
  type: user_actions.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error) => ({
  type: user_actions.SIGN_Out_FAILED,
  payload: error,
});




