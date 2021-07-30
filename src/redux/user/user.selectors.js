import { createSelector } from "reselect";

 const selecteUser=(state)=>state.user;

export const selectCurrentUser = createSelector(
  selecteUser,
  (user) => user.currentUser
); 