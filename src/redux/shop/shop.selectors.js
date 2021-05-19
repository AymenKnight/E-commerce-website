import { createSelector } from "reselect";
import memoize from "lodash.memoize";


const selecteShop = (state) => state.shop;

export const selecteShopCollections = createSelector(
  [selecteShop],
  (shop) => shop.collections
);

export const selecteCollectionIsFetching = createSelector(
  [selecteShop],
  (shop) => shop.isFetching
);

export const selecteShopCollectionsForPreview=createSelector(
  [selecteShopCollections],
  collections=> collections ?  Object.keys(collections).map(key=>collections[key]) : []
)

export const selecteCollectionByID = memoize( collection_url =>createSelector(
  [selecteShopCollections],
  collections => collections ? collections[collection_url]  : null
))

