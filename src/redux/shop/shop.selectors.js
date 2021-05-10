import { createSelector } from "reselect";
import memoize from "lodash.memoize";


const selecteShop = (state) => state.shop;

export const selecteShopCollections = createSelector(
  [selecteShop],
  (shop) => shop.collections
);

export const selecteShopCollectionsForPreview=createSelector(
  [selecteShopCollections],
  collections=>Object.keys(collections).map(key=>collections[key])
)

export const selecteCollectionByID = memoize( collection_url =>createSelector(
  [selecteShopCollections],
  collections =>collections[collection_url]
))

