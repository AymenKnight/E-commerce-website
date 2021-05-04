import { createSelector } from "reselect";

const selecteShop = (state) => state.shop;

export const selecteShopCollection = createSelector(
  [selecteShop],
  (shop) => shop.collection
);

