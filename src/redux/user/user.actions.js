import { user_actions } from "./user.actions.Constants";

export const setcurrentUserAction=user=>({
  type:user_actions.SET_CURRENT_USER,
  payload:user
})