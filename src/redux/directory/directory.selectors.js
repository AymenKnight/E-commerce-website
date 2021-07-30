import { createSelector } from "reselect";

const selecteDirectory = (state) => state.directory;

export const selecteDirectorySections = createSelector(
  [selecteDirectory],
 directory =>  directory.sections
);