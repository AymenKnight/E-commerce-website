import user_actions  from "./user.actions.Constants";

const initialState = {
  currentUser: null,
  error:null,
};

 const userReducer=(state=initialState,action)=>{
   switch (action.type) {
     case user_actions.EMAIL_SIGN_IN_SUCCESS:
     case user_actions.GOOGLE_SIGN_IN_SUCCESS:
       return {
         ...state,
         currentUser: action.payload,
         error: null,
       };
     case user_actions.EMAIL_SIGN_IN_FAILED:
     case user_actions.GOOGLE_SIGN_IN_FAILED:
       return {
         ...state,
         error:action.payload
       }

     default:
       return state;
   }
}

export default userReducer;