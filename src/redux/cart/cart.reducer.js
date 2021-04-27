import { cart_actions } from "./cart.actions.Constants";

const initial_State ={
    hidden:true
}

export const cartReducer=(state=initial_State,action)=>{
   switch (action.type) {
       case cart_actions.TOGGLE_CART_HIDDEN :
           return {
               ...state,
               hidden :!state.hidden
           };

       default:
          return state
   }
}