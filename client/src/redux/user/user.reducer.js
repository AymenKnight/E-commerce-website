import user_actions  from "./user.actions.Constants";

const initialState = {
  currentUser: null,
  error:null,
};

 const userReducer=(state=initialState,action)=>{
   switch (action.type) {
     case user_actions.SIGN_IN_SUCCESS:
       return {
         ...state,
         currentUser: action.payload,
         error: null,
       };
     case user_actions.SIGN_IN_FAILED:
       return {
         ...state,
         error: action.payload,
       };
     case user_actions.SIGN_OUT_SUCCESS:
       return {
         ...state,
         currentUser: null,
         error: null,
       };
     case user_actions.SIGN_Out_FAILED:
       return {
         ...state,
         error: action.payload,
       };
     case user_actions.SIGN_UP_FAILED:
       return {
         ...state,
         error: action.payload,
       };

     default:
       return state;
   }
}

export default userReducer;