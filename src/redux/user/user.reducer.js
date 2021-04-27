import { user_actions } from "./user.actions.Constants";

const initialState = {
  currentUser: null,
};

 const userReducer=(state=initialState,action)=>{
   switch (action.type) {
       case user_actions.SET_CURRENT_USER:
           return {
             ...state,
             currentUser: action.payload,
           };
           
   
       default:
         return initialState;
   }
}

export default userReducer;