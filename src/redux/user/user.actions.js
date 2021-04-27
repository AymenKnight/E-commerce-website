import { user_actions } from "./user.actions.Constants";

export const setcurrentUser=user=>({
  type:user_actions.SET_CURRENT_USER,
  paylaod:user
})