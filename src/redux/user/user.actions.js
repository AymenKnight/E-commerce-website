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





